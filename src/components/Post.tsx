import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

interface props {
  userId: number;
  title: string;
  body: string;
  picture: string | undefined;
  name: string | undefined;
}

export const Post = ({ userId, title, body, name, picture }: props) => {
  const { currentUser } = useContext(BlogContext);
  const id: number = currentUser?.login.id || 0;
  return (
    <div>
      {picture && (
        <div className="flex flex-row p-2">
          <img className="rounded-full" src={picture} />
          <h1 className="">{name}</h1>
        </div>
      )}
      <h4 className="text-xl font-semibold pl-4">{title}</h4>
      <p className="break-words pl-4 mt-1 max-h-32 overflow-scroll overflow-x-hidden overflow-y-hidden">
        {body}
      </p>
      {id + 1 == userId && (
        <button className="self-start mt-2 w-10 h-8">
          <i className="material-symbols-rounded">delete</i>
        </button>
      )}
      {id == userId && (
        <button className="absolute right-3 bottom-1.5 w-10 h-10">
          <i className="material-symbols-rounded">edit</i>
        </button>
      )}
    </div>
  );
};
