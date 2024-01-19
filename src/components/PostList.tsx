import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Post } from "./Post";
import { PostUserInfo } from "../interfaces";

export const PostList = () => {
  const { posts, postsInfo, search } = useContext(BlogContext);
  return (
    <ol className="p-5 pt-2 mt-3 h-full flex gap-5 item-start justify-center flex-wrap overflow-hidden overflow-y-auto">
      {posts.map(({ id, userId, title, body }) => {
        const postInfo: PostUserInfo | undefined = postsInfo.find((info) => {
          if (info.userId == userId) {
            return info;
          }
        });
        if (title.includes(search) || body.includes(search)) {
          return (
            <li
              key={id}
              className="hover:shadow-[0px_0px_10px_10px] hover:shadow-indigo-500 hover:cursor-pointer text-white relative flex flex-col p-2 pb-12 w-10/12 rounded-lg bg-indigo-950 self-center"
            >
              <Post
                userId={userId}
                title={title}
                body={body}
                name={postInfo?.name}
                picture={postInfo?.picture}
                id={id}
              />
            </li>
          );
        }
      })}
    </ol>
  );
};
