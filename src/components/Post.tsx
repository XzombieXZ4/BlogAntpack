import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

interface props {
  id: string;
  userId: string;
  title: string;
  body: string;
  picture: string | undefined;
  name: string | undefined;
}

export const Post = ({ userId, title, body, name, picture, id }: props) => {
  const { currentUser, deletePost, getPostId, changeVisible } =
    useContext(BlogContext);
  const uid: string = currentUser?.login.userId || "";
  return (
    <div>
      {picture && (
        <div className="w-full grid grid-cols-2 p-1 py-2">
          <div className="flex flex-row">
            <img className="rounded-full md:w-7 lg:w-10" src={picture} />
            <h1 className="pl-2 text-2xl self-center">{name}</h1>
          </div>
          <div className="place-self-end ">
            {uid == userId && (
              <button
                className="self-end mb-2 w-10 h-8"
                onClick={() => deletePost(id)}
              >
                <i className="material-symbols-rounded text-3xl">delete</i>
              </button>
            )}
          </div>
        </div>
      )}
      <h4 className="text-2xl font-semibold pl-2 py-2">{title}</h4>
      <p className="break-words pl-3 text-xl mt-1 max-h-32 overflow-scroll overflow-x-hidden overflow-y-hidden">
        {body}
      </p>
      {uid == userId && (
        <button
          className="absolute right-3 bottom-2.5 w-10 h-10"
          onClick={() => {
            getPostId(id, uid), changeVisible();
          }}
        >
          <i className="material-symbols-rounded text-4xl">edit</i>
        </button>
      )}
    </div>
  );
};
