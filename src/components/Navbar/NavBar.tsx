import { useLocation, Link } from "react-router-dom";
import { AccountBar, PostSearch } from "../";

export const NavBar = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/logIn":
      return (
        <div className="fixed bg-indigo-950 grid w-screen h-26 shrink-0 py-3">
          <Link
            className={` place-self-center pb-1 sm:ml-2 lg:ml-10 md:text-5xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer`}
            to="/"
          >
            PostPack
          </Link>
        </div>
      );
    case "/accountRegister":
      return (
        <div className="fixed bg-indigo-950 grid grid-cols-6 items- w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center w-full sm:ml-4 lg:ml-10 md:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer`}
            to="/"
          >
            PostPack
          </Link>
          <AccountBar />
        </div>
      );
    case "/":
      return sessionStorage.getItem("currentAccount") ? (
        <div className="fixed bg-indigo-950 grid grid-cols-6 w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center w-full  sm:ml-4 lg:ml-10 md:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer
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
        <div className="fixed bg-indigo-950 grid grid-cols-6 items- w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center w-full  lg:ml-10 md:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer
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
        <div className="fixed bg-indigo-950 grid grid-cols-6 items- w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center w-full  lg:ml-10 md:text-4xl text-slate-400 place-self-left hover:text-slate-300 cursor-pointer
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
