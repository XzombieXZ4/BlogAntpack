import { useAccount } from "../hooks/useAccount";

export const NavBar = () => {
  const { accountPage } = useAccount();
  return <button onClick={accountPage}>Sing in</button>;
};
