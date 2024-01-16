import { useState } from "react";
import { BlogPosts } from "../interfaces";

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPosts>({
    id: 256,
    body: "",
    userId: 256,
    title: "",
  });
  const getBlog = async () => {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const resp: Response = await fetch(url);
    const result = await resp.json();
    setPosts(result);
  };
  console.log(posts);
  return { getBlog };
};
