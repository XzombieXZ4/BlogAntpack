import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

export const UserButton = () => {
  const { currentUser } = useContext(BlogContext);
  const picture: string | undefined = currentUser?.picture?.thumbnail;
  return (
    <button className="self-center place-self-center col-start-3 ">
      {picture ? (
        <img
          className="rounded-full md:w-10 hover:shadow-indigo-500  hover:shadow-lg active:shadow-slate-950"
          src={picture}
        />
      ) : (
        <span className="material-symbols-outlined md:text-5xl lg:text-6xl">
          account_circle
        </span>
      )}
    </button>
  );
};
