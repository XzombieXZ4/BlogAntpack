import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

export const UserButton = () => {
  const { currentUser } = useContext(BlogContext);
  return (
    <button className="self-center place-self-center col-start-3 ">
      <img
        className="rounded-full md:w-10 hover:shadow-indigo-500  hover:shadow-lg active:shadow-slate-950"
        src={currentUser?.picture.thumbnail}
      />
    </button>
  );
};
