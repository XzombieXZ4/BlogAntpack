import { ChangeEvent, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Account, AccountResponse, Login } from "../interfaces";
import { accountReducer } from "../helpers/accountReducer";

export const useAccount = () => {
  const navigate = useNavigate();
  const [accountV, setAccountV] = useState<Login>({
    username: "",
    password: "",
  });
  const [usersR, setUsersR] = useState<Account[]>([]);
  const accountPage = () => {
    navigate("/logIn");
  }; //function to redirect at log in account page
  const onLogIn = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    // function to save the input in form page
    setAccountV({ ...accountV, [name]: value });
  };

  const getUsers = async () => {
    //Async Function to get users with a randomUserApi and a default admin user
    const url = "https://randomuser.me/api/?results=10";
    const resp = await fetch(url);
    const { results } = await resp.json();
    let i = 0;
    const adminUser: Account = {
      name: { first: "Admin", last: "User" },
      gender: "Unespecified",
      login: { id: String(i), username: "Admin", password: "123" },
    };
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
          login: { username, password, id: String(i) },
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
    setUsersR([adminUser, ...users]);
  };
  const [state, dispatch] = useReducer(accountReducer, usersR);
  const verifyLogin = () => {
    let userState: string = "";
    usersR.map((user) => {
      const {
        login: { username, password },
      } = user;
      if (username === accountV.username) {
        userState = "finded";
        if (password === accountV.password) {
          sessionStorage.setItem("currentAccount", JSON.stringify(user)); //i save the account session information in session storage because i don't have an external authentication system
          return navigate("/");
        }
        return alert("Wrong password");
      }
    });
    if (userState === "finded") return;
    alert("Wrong Username");
  };
  return {
    accountPage,
    onLogIn,
    getUsers,
    verifyLogin,
  };
};
