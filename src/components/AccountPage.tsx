import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const AccountPage = () => {
  const { onLogIn, verifyLogin } = useContext(BlogContext);
  return (
    <form onSubmit={verifyLogin}>
      <label>Username </label>
      <input type="text" onChange={onLogIn} name="username" />
      <label>Password</label>
      <input type="password" onChange={onLogIn} name="password" />
      <button type="submit">Done</button>
    </form>
  );
};
