import { useContext } from "react";
import { NavBar } from "..";
import { BlogContext } from "../../context/BlogContext";

export const CreateAccount = () => {
  const {
    getName,
    getAccountInfo,
    getLogin,
    registerAccount,
    account,
    getPassConfirm,
  } = useContext(BlogContext);
  return (
    <>
      <NavBar />
      <div className="grid place-content-center h-full w-full items-center text-white">
        <div className="flex flex-col w-full items-center">
          <form
            className=" bg-blue-950 text-2xl flex flex-col w-full lg:w-9/12 p-4 rounded-lg"
            onSubmit={registerAccount}
          >
            <div className=" flex flex-col self-center lg:grid lg:grid-col-2 lg:place-items-center">
              <label className=" py-4 lg:col-start-1 text-center">
                Name:
                <input
                  value={account.name.first}
                  className="ml-2 pl-2 text-black"
                  name="first"
                  onChange={getName}
                ></input>
              </label>
              <label className="py-2 lg:col-start-2 text-center">
                Last Name:
                <input
                  value={account.name.last}
                  className="ml-2 pl-2 text-black"
                  name="last"
                  onChange={getName}
                ></input>
              </label>
            </div>
            <div className="flex flex-col self-center lg:grid lg:grid-col-2 lg:place-items-center">
              <label className="py-2 col-start-1 text-center">
                Email:
                <input
                  value={account.email}
                  className="ml-2 pl-2 text-black"
                  name="email"
                  type="email"
                  onChange={getAccountInfo}
                />
              </label>
              <label className="py-2 col-start-2 text-center">
                username:
                <input
                  value={account.login.username}
                  className="ml-2 pl-2 text-black"
                  name="username"
                  onChange={getLogin}
                />
              </label>
            </div>
            <div className="flex flex-col self-center lg:grid lg:grid-col-2 lg:place-items-center">
              <label className="py-2 col-start-1 text-center">
                Password:
                <input
                  className="ml-2 pl-2 text-black"
                  name="password"
                  type="password"
                  onChange={getLogin}
                />
              </label>
              <label className="py-2 col-start-2 text-center">
                Password Confirmation:
                <input
                  className="ml-2 pl-2 text-black"
                  type="password"
                  onChange={getPassConfirm}
                />
              </label>
            </div>
            <button
              className="w-40 h-10 my-2 py-2 self-center flex flex-col text-white hover:shadow-[0px_0px_60px_10px] hover:shadow-blue-600 rounded-3xl active:text-green-500"
              type="submit"
            >
              <span className="self-center relative bottom-1">Done</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
