import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const AccountPage = () => {
  const { onLogIn } = useContext(BlogContext);
  return (
    <form>
      <label>Username </label>
      <input type="email" onChange={onLogIn} name="email" />
      <label>Password</label>
      <input type="password" onChange={onLogIn} name="password" />
      <button>Done</button>
    </form>
  );
};
