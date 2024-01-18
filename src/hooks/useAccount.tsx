import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { Account, AccountResponse, Login } from "../interfaces";
import { useNavigate } from "react-router-dom";

type AccountAction = //types to set the actions in account reducer

    | { type: "initialAccount"; accounts: Account[] }
    | { type: "addAccount"; account: Account }
    | { type: "deleteAccount"; account: Account };

const accountReducer = (state: Account[], action: AccountAction) => {
  // account reducer function
  switch (action.type) {
    case "initialAccount":
      return action.accounts;
    case "addAccount":
      return [...state, action.account];
    default:
      return state;
  }
};

const initialUsers: Account[] = [];

const init = () => {
  if (localStorage.getItem("Accounts")) {
    return JSON.parse(localStorage.getItem("Accounts") || "");
  } else return [];
};

export const useAccount = () => {
  const [accountV, setAccountV] = useState<Login>({
    //hook to save the form input
    username: "",
    password: "",
  });

  const [accounts, dispatchAccount] = useReducer(
    accountReducer,
    initialUsers,
    init
  ); // hook reducer to manage accounts state

  const navigate = useNavigate(); //hook to change the window

  const onLogIn = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    // function to save the form input in login page
    setAccountV({ ...accountV, [name]: value });
  };

  const getUsers = async () => {
    //Async Function to get users with a randomUserApi and a default admin user
    const url: string = "https://randomuser.me/api/?results=10";
    const resp: Response = await fetch(url);
    const { results } = await resp.json();
    let i = 0;
    const users: Account[] = results.map(
      ({
        cell,
        name: { first, last, title },
        email,
        gender,
        location: { city, country, postcode, state, street },
        login: { username, password },
        phone,
        nat,
        picture,
      }: AccountResponse) => {
        i++;
        return {
          login: { username, password, userId: String(i) },
          name: { first, last, title },
          gender,
          cell,
          phone,
          email,
          location: {
            city,
            country,
            postcode,
            state,
            street,
          },
          nat,
          picture,
        };
      }
    );
    return dispatchAccount({
      type: "initialAccount",
      accounts: [...users],
    });
  };
  useEffect(() => {
    if (!localStorage.getItem("Accounts")) getUsers();
  }, []);
  useEffect(() => {
    localStorage.setItem("Accounts", JSON.stringify(accounts));
  }, [accounts]);

  const verifyLogin = (event: React.SyntheticEvent<HTMLFormElement>) => {
    //function to verify if the ingresed account is in the database
    event.preventDefault();
    let userState: string = "";
    accounts.map((user) => {
      const {
        login: { username, password },
      } = user;
      if (username === accountV.username) {
        userState = "finded";
        if (password === accountV.password) {
          sessionStorage.setItem("currentAccount", JSON.stringify(user)); //i save the account session information in session storage because i don't have an external authentication system
          navigate("/");
          return window.location.reload();
        }
        return alert("Wrong password");
      }
    });
    if (userState === "finded") return;
    alert("Wrong Username");
  };

  const accountPage = () => {
    //function to redirect at log in account page
    navigate("/logIn");
  };

  return {
    onLogIn,
    accountPage,
    verifyLogin,
    getUsers,
    accounts,
  };
};
