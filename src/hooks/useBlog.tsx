import { useState } from "react";
import { BlogPosts } from "../interfaces";

export const useBlog = () => {
  const [initialPosts, setInitialPosts] = useState<BlogPosts[]>([]);
  const getPosts = async () => {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const resp: Response = await fetch(url);
    const result: BlogPosts[] = await resp.json();
    return setInitialPosts([...result]);
  };
  return { getPosts, initialPosts };
};
