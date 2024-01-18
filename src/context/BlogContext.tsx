import { ChangeEvent, SyntheticEvent, createContext, useEffect } from "react";
import { useAccount, useBlog } from "../hooks/";
import { Account, BlogPosts, PostUserInfo } from "../interfaces";
import { useCUser } from "../hooks/useCUser";

interface BlogContextProps {
  onLogIn: (val: ChangeEvent<HTMLInputElement>) => void;
  verifyLogin: (event: SyntheticEvent<HTMLFormElement>) => void;
  posts: BlogPosts[];
  currentUser?: Account;
  postsInfo: PostUserInfo[];
  deletePost: (id: string) => void;
  changeVisible: () => void;
  state: boolean;
  editPost: () => void;
  post: BlogPosts;
  addPost: (userId?: string) => void;
  resetPost: () => void;
  getPostId: (id: string, userId: string) => void;
  getTitle: (value: ChangeEvent<HTMLInputElement>) => void;
  getPost: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider = ({ children }: BlogProps) => {
  const { onLogIn, verifyLogin } = useAccount();
  const {
    posts,
    postsInfo,
    deletePost,
    changeVisible,
    state,
    post,
    resetPost,
    editPost,
    getPostId,
    getTitle,
    getPost,
    addPost,
  } = useBlog();
  const { currentUser } = useCUser();
  return (
    <BlogContext.Provider
      value={{
        onLogIn,
        verifyLogin,
        posts,
        currentUser,
        postsInfo,
        deletePost,
        changeVisible,
        state,
        editPost,
        post,
        addPost,
        resetPost,
        getPostId,
        getTitle,
        getPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
