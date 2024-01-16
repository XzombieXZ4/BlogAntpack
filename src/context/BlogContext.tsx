import { ChangeEvent, createContext, useEffect } from "react";
import { useAccount } from "../hooks/useAccount";
import { useBlog } from "../hooks/useBlog";

interface BlogContextProps {
  onLogIn: (val: ChangeEvent<HTMLInputElement>) => void;
  verifyLogin: () => void;
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider = ({ children }: BlogProps) => {
  const { onLogIn, getUsers, verifyLogin } = useAccount();
  const { getBlog } = useBlog();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <BlogContext.Provider value={{ onLogIn, verifyLogin }}>
      {children}
    </BlogContext.Provider>
  );
};
