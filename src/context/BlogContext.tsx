import { ChangeEvent, SyntheticEvent, createContext, useEffect } from "react";
import { useAccount, useBlog } from "../hooks/";

import { Account, BlogPosts, BlogResponse, PostUserInfo } from "../interfaces";
import { useCUser } from "../hooks/useCUser";

interface BlogContextProps {
  onLogIn: (val: ChangeEvent<HTMLInputElement>) => void;
  verifyLogin: (event: SyntheticEvent<HTMLFormElement>) => void;
  posts: BlogPosts[];
  currentUser: Account | undefined;
  postsInfo: PostUserInfo[];
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider = ({ children }: BlogProps) => {
  const { onLogIn, verifyLogin } = useAccount();
  const { posts, postsInfo } = useBlog();
  const { currentUser } = useCUser();

  return (
    <BlogContext.Provider
      value={{ onLogIn, verifyLogin, posts, currentUser, postsInfo }}
    >
      {children}
    </BlogContext.Provider>
  );
};
