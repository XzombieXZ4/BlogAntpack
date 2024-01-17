import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { NavBar } from "./NavBar";

export const AccountPage = () => {
  const { onLogIn, verifyLogin } = useContext(BlogContext);
  return (
    <div>
      <NavBar />
      <div className="pt-24 text-2xl flex flex-col items-center">
        <form
          className="bg-blue-950 rounded-xl flex flex-col items-center py-8 px-4 "
          onSubmit={verifyLogin}
        >
          <label className="text-white py-4">
            Username{" "}
            <input
              className="px-2 text-black"
              type="text"
              onChange={onLogIn}
              name="username"
            />
          </label>
          <label className="rounded-sm text-white py-4">
            Password{" "}
            <input
              className="rounded-sm px-2 text-black"
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
