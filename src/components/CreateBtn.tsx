import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const CreateBtn = () => {
  const { state, changeVisible } = useContext(BlogContext);
  return (
    <button
      className={`fixed w-20 h-20 bottom-4 right-4 mr-1 lg:right-6 grid grid-rows-1 border-solid border-2 animate__animated animate__faster border-white rounded-full bg-indigo-950 hover:bg-indigo-700  hover:shadow-indigo-500  hover:shadow-md active:shadow-inner active:shadow-slate-950${
        state ? "animate__slideInUp" : "-z-50 animate__fadeOutRight"
      }`}
      onClick={changeVisible}
    >
      <i className=" material-symbols-rounded self-center text-5xl">
        edit_square
      </i>
    </button>
  );
};
