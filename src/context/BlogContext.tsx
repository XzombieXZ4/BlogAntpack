import { ChangeEvent, createContext, useEffect } from "react";
import { useBlog } from "../hooks/useBlog";

interface BlogContextProps {
  onLogIn: (val: ChangeEvent<HTMLInputElement>) => void;
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider = ({ children }: BlogProps) => {
  const { onLogIn, getUsers } = useBlog();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <BlogContext.Provider value={{ onLogIn }}>{children}</BlogContext.Provider>
  );
};
