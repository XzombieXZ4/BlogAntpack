import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { Account, BlogPosts, PostUserInfo } from "../interfaces";
import { useAccount } from ".";
import { idGen } from "../helpers/helpers";

type BlogAction = //type to set the action in blog reducer function

    | {
        type: "setInitialPosts";
        posts: BlogPosts[];
      }
    | {
        type: "addPost";
        post: BlogPosts;
      }
    | {
        type: "editPost";
        post: BlogPosts;
      }
    | {
        type: "deletePost";
        id: string;
      };

export const blogReducer = (state: BlogPosts[], action: BlogAction) => {
  //blog reducer function
  switch (action.type) {
    case "setInitialPosts":
      return [...action.posts];
    case "addPost":
      return [...state, action.post];
    case "editPost":
      const newState: BlogPosts[] = state.map((n) => {
        if (n.id == action.post.id)
          return {
            ...action.post,
          };
        return n;
      });
      return [...newState];
    case "deletePost":
      const filterPost = state.filter((n) => {
        if (n.id != action.id) return n;
      });
      return [...filterPost];
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
  const [state, setState] = useState<boolean>(true);
  const [post, setPost] = useState<BlogPosts>({
    id: "",
    userId: "",
    body: "",
    title: "",
  });

  const getPosts = async () => {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const resp: Response = await fetch(url);
    const result: BlogPosts[] = await resp.json();
    return dispatchPosts({
      type: "setInitialPosts",
      posts: result.map((res) => {
        return {
          id: String(res.id),
          userId: String(res.userId),
          title: res.title,
          body: res.body,
        };
      }),
    });
  };
  const getPostInfo = () => {
    const postsI: PostUserInfo[] = accounts.map((account: Account) => {
      return {
        userId: account.login.userId,
        name: `${account.name.first} ${account.name.last}`,
        picture: account.picture.thumbnail,
      };
    });
    setPostInfo([...postsI]);
  };
  const deletePost = (id: string) => {
    return dispatchPosts({ type: "deletePost", id });
  };
  useEffect(() => {
    //hook to set the initial posts get by the api
    if (!localStorage.getItem("Posts")) getPosts();
  }, []);
  useEffect(() => {
    localStorage.setItem("Posts", JSON.stringify(posts));
    getPostInfo();
  }, [posts]);
  const changeVisible = () => {
    setState(!state);
  };
  const addPost = (userId?: string) => {
    if (userId) {
      const id: string = idGen();
      dispatchPosts({
        type: "addPost",
        post: { userId, id, title: post.title, body: post.body },
      });
    } else {
      alert("Please LogInFirst");
    }
  };

  const resetPost = () => {
    setPost({
      id: "",
      userId: "",
      body: "",
      title: "",
    });
  };
  const editPost = () => {
    dispatchPosts({
      type: "editPost",
      post: {
        id: post.id,
        body: post.body,
        title: post.title,
        userId: post.userId,
      },
    });
  };
  const getPostId = (id: string, userId: string) => {
    return setPost({ ...post, id, userId });
  };
  const getTitle = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: value });
  };
  const getPost = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, body: value });
  };
  return {
    posts,
    postsInfo,
    deletePost,
    changeVisible,
    state,
    post,
    addPost,
    resetPost,
    editPost,
    getPostId,
    getTitle,
    getPost,
  };
};
