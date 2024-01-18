import { useLocation, Link } from "react-router-dom";
import { PostSearch } from "./PostSearch";
import { AccountBar } from "./AccountBar";

export const NavBar = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/logIn":
      return (
        <div className="absolute bg-indigo-950 grid w-screen h-26 shrink-0">
          <Link
            className={` place-self-center p-4 md:text-4xl lg:text-4xl  pl-2 text-slate-400 place-self-left hover:text-slate-300 cursor-pointer w-40
      `}
            to="/"
          >
            PostPack
          </Link>
        </div>
      );
    case "/":
      return sessionStorage.getItem("currentAccount") ? (
        <div className="fixed bg-indigo-950 flex justify-between w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center md:text-4xl lg:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer w-40
          ${pathname === "/" ? "!text-white" : ""}
        `}
            to="/"
          >
            PostPack
          </Link>
          <PostSearch />
          <AccountBar />
        </div>
      ) : (
        <div className="fixed bg-indigo-950 flex justify-between w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center md:text-4xl lg:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer w-40
          ${pathname === "/" ? "!text-white" : ""}
        `}
            to="/"
          >
            PostPack
          </Link>
          <PostSearch />
          <AccountBar />
        </div>
      );
    default:
      return (
        <div className="fixed bg-indigo-950 flex justify-between w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center md:text-4xl lg:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer w-40
          ${pathname === "/" ? "!text-white" : ""}
        `}
            to="/"
          >
            PostPack
          </Link>
          <PostSearch />
          <AccountBar />
        </div>
      );
  }
};
