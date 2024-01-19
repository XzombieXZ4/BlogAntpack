import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { NavBar } from "../Navbar/NavBar";
import { Link } from "react-router-dom";

export const AccountPage = () => {
  const { onLogIn, verifyLogin } = useContext(BlogContext);
  if (sessionStorage.getItem("currentAccount")) return;
  return (
    <div className="h-full">
      <NavBar />
      <div className="flex flex-row items-center h-full w-full">
        <div className="animate__animated animate__backInDown overflow-hidden overflow-y-auto text-2xl w-full flex flex-col items-center lg:mb-40">
          <form
            className="bg-blue-950 rounded-xl grid grid-rows-3 items-center py-8 px-4 self-center h-72"
            onSubmit={verifyLogin}
          >
            <label className="text-white py-4 flex flex-col items-center">
              <span>Username:</span>
              <input
                className="mx-2 px-2 text-black w-3/5"
                type="text"
                onChange={onLogIn}
                name="username"
              />
            </label>
            <label className="rounded-sm text-white py-4 flex flex-col items-center">
              <span>Password:</span>
              <input
                className="rounded-sm mx-2 px-4 text-black w-3/5"
                type="password"
                onChange={onLogIn}
                name="password"
              />
            </label>
            <div className="grid grid-cols-2">
              <Link
                className="w-40 h-10 place-self-center flex flex-col items-center pt-1 text-white hover:shadow-[0px_0px_60px_10px] hover:shadow-blue-600 rounded-3xl active:text-green-500"
                to={"/accountRegister"}
              >
                Register
              </Link>
              <button
                className="w-40 h-10 place-self-center text-white hover:shadow-[0px_0px_60px_10px] hover:shadow-blue-600 rounded-3xl active:text-green-500"
                type="submit"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
