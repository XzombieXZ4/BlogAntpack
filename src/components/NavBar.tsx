import { useBlog } from "../hooks/useBlog";

export const NavBar = () => {
  const { accountPage } = useBlog();
  return <button onClick={accountPage}>Sing in</button>;
};
