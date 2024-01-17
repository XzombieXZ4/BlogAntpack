import { useLocation, Link } from "react-router-dom";
import { LogInButton } from "./LogInButton";
import { PostSearch } from "./PostSearch";

export const NavBar = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/logIn":
      return (
        <div className="absolute bg-indigo-950 flex flex-row w-screen shrink-0 ">
          <Link
            className={` place-self-center p-4 md:text-4xl lg:text-4xl  pl-2 text-slate-400 place-self-left hover:text-slate-300 cursor-pointer w-40
      `}
            to="/"
          >
            PostPack
          </Link>
        </div>
      );
    default:
      return (
        <div className="absolute bg-indigo-950 flex flex-row w-screen h-26 shrink-0 ">
          <Link
            className={` place-self-center md:text-4xl lg:text-4xl  pl-2 text-slate-400 place-self-left hover:text-slate-300 cursor-pointer w-40
          ${pathname === "/" ? "!text-white" : ""}
        `}
            to="/"
          >
            PostPack
          </Link>
          <PostSearch />
          <LogInButton />
        </div>
      );
  }
};
