import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const AccountPage = () => {
  const { onLogIn, verifyLogin } = useContext(BlogContext);
  return (
    <form onSubmit={verifyLogin}>
      <label>
        Username <input type="text" onChange={onLogIn} name="username" />
      </label>

      <label>
        Password <input type="password" onChange={onLogIn} name="password" />
      </label>

      <button type="submit">Done</button>
    </form>
  );
};
