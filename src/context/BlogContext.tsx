import { ChangeEvent, createContext, useEffect, useReducer } from "react";
import { useAccount } from "../hooks/useAccount";
import { useBlog } from "../hooks/useBlog";
import { Account, BlogPosts } from "../interfaces";
import { accountReducer, postReducer } from "../helpers/reducers";

interface BlogContextProps {
  onLogIn: (val: ChangeEvent<HTMLInputElement>) => void;
  verifyLogin: () => void;
  posts: BlogPosts[];
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider = ({ children }: BlogProps) => {
  const { onLogIn, getUsers, verifyLogin, usersR } = useAccount();
  const { getPosts, initialPosts } = useBlog();
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  const [accounts, dispatchAccount] = useReducer(accountReducer, usersR);
  const [posts, dispatchPosts] = useReducer(postReducer, initialPosts);

  return (
    <BlogContext.Provider value={{ onLogIn, verifyLogin, posts }}>
      {children}
    </BlogContext.Provider>
  );
};
