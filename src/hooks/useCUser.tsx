//hook of current user saved in session storage

import { useEffect, useState } from "react";
import { Account } from "../interfaces";

export const useCUser = () => {
  const [currentUser, setCurrentUser] = useState<Account>();
  const getCUser = () => {
    if (sessionStorage.getItem("currentAccount"))
      setCurrentUser(
        JSON.parse(sessionStorage.getItem("currentAccount") || "")
      );
  };
  useEffect(() => {
    getCUser();
  }, []);

  return {
    currentUser,
  };
};
