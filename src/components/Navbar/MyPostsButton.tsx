import { useLocation } from "react-router-dom";
import { useAccount } from "../../hooks";

export const MyPostsButton = () => {
  const { pathname } = useLocation();
  const { MyPostsPage } = useAccount();
  return (
    <div
      className={`text-4xl col-start-2 mr-3 self-center place-self-end text-slate-400 place-self-left hover:text-slate-300 cursor-pointer
    ${pathname === "/MyPosts" ? "text-white" : ""}`}
    >
      <button onClick={MyPostsPage}>Myposts</button>
    </div>
  );
};
