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
  getPostI: (id: string, userId: string, title: string, bodu: string) => void;
  getTitle: (value: ChangeEvent<HTMLInputElement>) => void;
  getPost: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  search: string;
  getSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  createAccountPage: () => void;
  getLogin: (value: ChangeEvent<HTMLInputElement>) => void;
  getName: (value: ChangeEvent<HTMLInputElement>) => void;
  getAccountInfo: (value: ChangeEvent<HTMLInputElement>) => void;
  registerAccount: (value: SyntheticEvent<HTMLFormElement>) => void;
  account: Account;
  getPassConfirm: (value: ChangeEvent<HTMLInputElement>) => void;
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider = ({ children }: BlogProps) => {
  const {
    onLogIn,
    verifyLogin,
    createAccountPage,
    getLogin,
    getName,
    getAccountInfo,
    registerAccount,
    account,
    getPassConfirm,
  } = useAccount();
  const {
    posts,
    postsInfo,
    search,
    getSearch,
    deletePost,
    changeVisible,
    state,
    post,
    resetPost,
    editPost,
    getPostI,
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
        search,
        getSearch,
        deletePost,
        changeVisible,
        state,
        editPost,
        post,
        addPost,
        resetPost,
        getPostI,
        getTitle,
        getPost,
        createAccountPage,
        getLogin,
        getName,
        getAccountInfo,
        registerAccount,
        account,
        getPassConfirm,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
