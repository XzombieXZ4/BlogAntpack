import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Account, AccountResponse, Login } from "../interfaces/interfaces";

export const useBlog = () => {
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
    const url = "https://randomuser.me/api/?results=10";
    const resp = await fetch(url);
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
          login: { username, password, id: i },
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
    setUsersR(users);
  };
  console.log(usersR);
  return {
    accountPage,
    onLogIn,
    getUsers,
    usersR,
  };
};
