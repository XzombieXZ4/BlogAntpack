import { ChangeEvent, createContext, useEffect } from "react";
import { useAccount } from "../hooks/useAccount";

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
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <BlogContext.Provider value={{ onLogIn, verifyLogin }}>
      {children}
    </BlogContext.Provider>
  );
};
