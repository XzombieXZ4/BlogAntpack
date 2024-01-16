import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const BlogList = () => {
  const { posts } = useContext(BlogContext);
  return (
    <div>
      {posts.map(({ id, userId, title, body }) => {
        return (
          <>
            <h1>{id}</h1>
            <h1>{userId}</h1>
            <h1>pakita</h1>
          </>
        );
      })}
    </div>
  );
};
