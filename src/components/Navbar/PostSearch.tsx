import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

export const PostSearch = () => {
  const { getSearch } = useContext(BlogContext);
  return (
    <div className="text-white col-start-2 col-end-5 flex grow py-3 md:pl-14 overflow-hidden">
      <input
        id="search"
        className="rounded-full w-11/12 h-12 text-2xl font-bold text-black px-4 self-center"
        placeholder="  Search Post"
        onChange={getSearch}
      />
    </div>
  );
};
