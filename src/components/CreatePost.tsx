import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const CreatePost = () => {
  const {
    state,
    post,
    changeVisible,
    resetPost,
    editPost,
    getTitle,
    getPost,
    addPost,
    currentUser,
  } = useContext(BlogContext);
  const userId: string | undefined = currentUser?.login.userId;

  return (
    <div
      className={`fixed top-[7.5rem] animate__animated animate__faster w-10/12  h-96 flex flex-col grow bg-indigo-800 rounded-lg md:left-12 lg:left-[4.6rem] xl:left-[5.6rem] 2xl:left-[9.2rem] ${
        state ? "animate__zoomOut -z-50" : "animate__zoomIn"
      }`}
    >
      <input
        value={post.title}
        className="self-center w-11/12 h-8 mt-3 text-xl font-semibold rounded-lg bg-transparent"
        placeholder="Write Title"
        onChange={getTitle}
      />
      <textarea
        value={post.body}
        className="w-11/12 mt-4 grow self-center text-xl rounded-md bg-transparent resize-none"
        placeholder="Write Post"
        onChange={getPost}
      />
      {post.userId ? (
        <button
          className="flex absolute right-5 bottom-4 h-10 w-10"
          onClick={() => {
            editPost();
            changeVisible();
            resetPost();
          }}
        >
          <i className="material-symbols-rounded self-center pl-1 text-4xl">
            done
          </i>
        </button>
      ) : (
        <button
          className="flex absolute right-5 bottom-4 h-10 w-10"
          onClick={() => {
            addPost(userId);
            changeVisible();
            resetPost();
          }}
        >
          <i className="material-symbols-rounded self-center pl-1 text-4xl">
            done
          </i>
        </button>
      )}
      <button
        className="flex realtive ml-2 mb-3.5 mt-2 h-10 w-10"
        onClick={() => {
          changeVisible(), resetPost();
        }}
      >
        <i className="material-symbols-rounded self-center pl-1 text-4xl">
          close
        </i>
      </button>
    </div>
  );
};
