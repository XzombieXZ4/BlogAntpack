import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const UserButton = () => {
  const { currentUser } = useContext(BlogContext);
  return (
    <button className="self-center">
      <img className="rounded-full" src={currentUser?.picture.thumbnail} />
    </button>
  );
};
