import { useLocation } from "react-router-dom";
import { useAccount } from "../hooks";

export const LogInButton = () => {
  const { pathname } = useLocation();
  const { accountPage } = useAccount();
  return (
    <button
      className={
        "text-2xl grow w-5 flex py-2 relative justify-end text-slate-400"
      }
      onClick={accountPage}
    >
      <span className="material-symbols-outlined md:text-5xl lg:text-6xl">
        account_circle
      </span>
    </button>
  );
};
