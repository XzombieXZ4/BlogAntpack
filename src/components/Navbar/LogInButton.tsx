import { useAccount } from "../../hooks";

export const LogInButton = () => {
  const { accountPage } = useAccount();
  return (
    <button
      className={
        "w-5 text-2xl grow flex py-2 col-start-3 place-self-center text-slate-400 sm:pr-20 hover:text-white active:text-green-200"
      }
      onClick={accountPage}
    >
      <span className="material-symbols-outlined md:text-5xl lg:text-6xl">
        person_edit
      </span>
    </button>
  );
};
