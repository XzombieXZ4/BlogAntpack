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
        if (n.userId != action.id) return n;
      });
      return [...filterPost];
    default:
      return [...state];
  }
};

const initialState: BlogPosts[] = []; // initial blogs state

const init = () => {
  //initializer function of blog reducer
  if (localStorage.getItem("Posts")) {
    return JSON.parse(localStorage.getItem("Posts") || "");
  } else return [];
};

export const useBlog = () => {
  const { accounts } = useAccount();
  const [posts, dispatchPosts] = useReducer(blogReducer, initialState, init); // hook of blog reducer
  const [postsInfo, setPostInfo] = useState<PostUserInfo[]>([]); //hook to save the post User Info like image, userId, etc
  const [search, setSearch] = useState<string>(""); //hook to save the input to search posts
  const [state, setState] = useState<boolean>(true); //hook to changevisibility of at interface items like create post
  const [post, setPost] = useState<BlogPosts>({
    //hook to save the new post an the edit post information
    id: "",
    userId: "",
    body: "",
    title: "",
  });

  const getPosts = async () => {
    //function to get posts of the api
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
    //function to get post information like name, image and user
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
    //function to delete post
    return dispatchPosts({ type: "deletePost", id });
  };
  useEffect(() => {
    //hook to set the initial posts get by the api
    if (!localStorage.getItem("Posts")) getPosts();
  }, []);
  useEffect(() => {
    //hook to set the posts in localstorage
    localStorage.setItem("Posts", JSON.stringify(posts));
    getPostInfo();
  }, [posts]);
  const changeVisible = () => {
    //function to change visibility of some interface components
    setState(!state);
  };
  const getSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    //function to get search input
    setSearch(value);
  };
  const addPost = (userId?: string) => {
    //function to add new post
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
    //function to reset post state values for edit an add new post
    setPost({
      id: "",
      userId: "",
      body: "",
      title: "",
    });
  };
  const editPost = () => {
    //function to edit post
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
  const getPostI = (
    //function to getPostInformation to edit
    id: string,
    userId: string,
    title: string,
    body: string
  ) => {
    return setPost({ id, userId, title, body });
  };
  const getTitle = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    //function to get title input in save and editpost
    setPost({ ...post, title: value });
  };
  const getPost = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    //function to get body input in save and editpost
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
    getPostI,
    getTitle,
    getPost,
    getSearch,
    search,
  };
};
