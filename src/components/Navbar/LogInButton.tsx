import { useAccount } from "../../hooks";

export const LogInButton = () => {
  const { accountPage } = useAccount();
  return (
    <button
      className={
        "text-2xl grow w-5 flex py-2 col-start-3 place-self-center text-slate-400 sm:pr-20"
      }
      onClick={accountPage}
    >
      <span className="material-symbols-outlined md:text-5xl lg:text-6xl">
        account_circle
      </span>
    </button>
  );
};
