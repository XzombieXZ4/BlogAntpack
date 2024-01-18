import { useEffect, useReducer, useState } from "react";
import { BlogPosts, PostUserInfo } from "../interfaces";
import { useAccount } from ".";

type BlogAction = //type to set the action in blog reducer function

    | {
        type: "setInitialPosts";
        posts: BlogPosts[];
      }
    | {
        type: "addPost";
        post: BlogPosts;
      };

export const blogReducer = (state: BlogPosts[], action: BlogAction) => {
  //blog reducer function
  switch (action.type) {
    case "setInitialPosts":
      return [...action.posts];
    case "addPost":
      return [...state, action.post];
    default:
      return [...state];
  }
};

const initialState: BlogPosts[] = [];

const init = () => {
  if (localStorage.getItem("Posts")) {
    return JSON.parse(localStorage.getItem("Posts") || "");
  } else return [];
};

export const useBlog = () => {
  const [posts, dispatchPosts] = useReducer(blogReducer, initialState, init);
  const { accounts } = useAccount();
  const [postsInfo, setPostInfo] = useState<PostUserInfo[]>([]);
  const getPosts = async () => {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const resp: Response = await fetch(url);
    const result: BlogPosts[] = await resp.json();
    return dispatchPosts({ type: "setInitialPosts", posts: result });
  };
  const getPostInfo = () => {
    const postsI: PostUserInfo[] = accounts.map((account) => {
      return {
        id: account.login.id,
        name: `${account.name.first} ${account.name.last}`,
        picture: account.picture.thumbnail,
      };
    });
    setPostInfo([...postsI]);
  };
  useEffect(() => {
    //hook to set the initial posts get by the api
    if (!localStorage.getItem("Posts")) getPosts();
  }, []);
  useEffect(() => {
    localStorage.setItem("Posts", JSON.stringify(posts));
    getPostInfo();
  }, [posts]);
  return { posts, postsInfo };
};
