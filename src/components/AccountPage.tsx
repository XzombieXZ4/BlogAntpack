import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { NavBar } from "./NavBar";

export const AccountPage = () => {
  const { onLogIn, verifyLogin } = useContext(BlogContext);
  return (
    <div>
      <NavBar />
      <div className="animate__animated animate__backInDown overflow-hidden overflow-y-auto mt-24 text-2xl flex flex-col items-center">
        <form
          className="bg-blue-950 rounded-xl flex flex-col items-center py-8 px-4 "
          onSubmit={verifyLogin}
        >
          <label className="text-white py-4">
            Username
            <input
              className="mx-2 px-2 text-black w-3/5"
              type="text"
              onChange={onLogIn}
              name="username"
            />
          </label>
          <label className="rounded-sm text-white py-4">
            Password
            <input
              className="rounded-sm mx-2 px-4 text-black w-3/5"
              type="password"
              onChange={onLogIn}
              name="password"
            />
          </label>
          <button className="text-white" type="submit">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};
