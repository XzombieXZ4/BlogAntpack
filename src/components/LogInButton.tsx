import { useLocation } from "react-router-dom";
import { useAccount } from "../hooks/useAccount";
import { useEffect, useState } from "react";

export const LogInButton = () => {
  const { pathname } = useLocation();
  const { accountPage } = useAccount();
  return (
    <button
      className={`text-2xl grow flex py-2 fixed right-2 ${
        pathname === "/LogIn"
          ? "text-white bg-indigo-700 shadow-inner shadow-indigo-500"
          : "text-slate-400"
      }`}
      onClick={accountPage}
    >
      <span className="material-symbols-outlined md:text-5xl lg:text-6xl">
        account_circle
      </span>
    </button>
  );
};
