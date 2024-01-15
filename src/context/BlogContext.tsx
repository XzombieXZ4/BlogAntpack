import { createContext } from "react";

interface BlogContextProps {
  any: () => void;
}

interface BlogProps {
  children: JSX.Element | JSX.Element[];
}

const BlogContext = createContext<BlogContextProps>({} as BlogContextProps);

export const BlogProvider = ({ children }: BlogProps) => {
  const any = () => {};
  return (
    <BlogContext.Provider value={{ any }}>{children}</BlogContext.Provider>
  );
};
