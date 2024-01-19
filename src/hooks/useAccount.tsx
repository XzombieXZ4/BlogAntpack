//Because I do not have a database where I can obtain the data, for the technical test, I have stored the data in the localstorage
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Account, AccountResponse, Login, NameForm } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { idGen } from "../helpers/helpers";

type AccountAction = //types to set the actions in account reducer

    | { type: "initialAccount"; accounts: Account[] }
    | { type: "addAccount"; account: Account };

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

const initialUsers: Account[] = []; //Account initial state

const init = () => {
  //initializer function of account reducer
  if (localStorage.getItem("Accounts")) {
    //condition to verificate if the accounts are in localstorage
    return JSON.parse(localStorage.getItem("Accounts") || ""); //If they are, they are obtained from it
  } else return []; // else init an empty array
};

export const useAccount = () => {
  const [accountV, setAccountV] = useState<Login>({
    //hook to save the form input of loginPage
    username: "",
    password: "",
  });

  const [accounts, dispatchAccount] = useReducer(
    accountReducer,
    initialUsers,
    init
  ); // hook reducer to manage accounts state

  const navigate = useNavigate(); //hook to change the page

  const [account, setAccount] = useState<Account>({
    //hook to obtain the information of the form of the register page
    gender: "Unespecified",
    email: "",
    login: {
      userId: "",
      password: "",
      username: "",
    },
    name: {
      first: "",
      last: "",
    },
    picture: { thumbnail: "", large: "", medium: "" },
  });

  const [pass, setPass] = useState<string>(""); //hook to obtain the password confirm of register page

  const onLogIn = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    // function to save the form input in login page
    setAccountV({ ...accountV, [name]: value });
  };

  const getUsers = async () => {
    //Async Function to get users with a randomUserApi
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
    //hook to check if there is account data in local storage, if not, the function is initialized to obtain the data
    if (!localStorage.getItem("Accounts")) getUsers();
  }, []);

  useEffect(() => {
    //hook to save the data in localstorage
    localStorage.setItem("Accounts", JSON.stringify(accounts));
  }, [accounts]);

  const verifyLogin = (event: React.SyntheticEvent<HTMLFormElement>) => {
    //function to verify if the ingresed account is in the database
    event.preventDefault();
    event.stopPropagation();
    let userState: string = "";
    accounts.map((user) => {
      const {
        login: { username, password },
      } = user;
      if (username === accountV.username) {
        userState = "finded";
        if (password === accountV.password) {
          console.log();
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
    //function to redirect at login account page
    navigate("/logIn");
  };
  const myPostsPage = (path: string) => {
    //function to redirect at MyPosts page
    if (path === "/MyPosts") return;
    navigate("MyPosts");
  };
  const createAccountPage = () => {
    //function to redirect at login account page
    navigate("/accountRegister");
  };
  const getName = ({
    //function to get namevalues in registration page form
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, name: { ...account.name, [name]: value } });
  };
  const getAccountInfo = ({
    //function to get values in registration page form
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [name]: value });
  };

  const getLogin = ({
    //function to get login values in registration page form
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, login: { ...account.login, [name]: value } });
  };

  const getPassConfirm = ({
    //function to get password confirmation in registration page form
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setPass(value);
  };

  const registerAccount = (event: SyntheticEvent<HTMLFormElement>) => {
    //function to save the new account in local storage
    let d: string = "";
    accounts.find((user) => {
      if (user.email === account.email) {
        setAccount({ ...account, email: "" });
        d = "done";
        return alert("the email already exist");
      }
      if (user.login.username === account.login.username) {
        d = "done";
        return alert("the username already exist");
      }
    });
    if (!account.name.first) return alert("please insert a name");
    if (!account.name.last) return alert("please insert a last name");
    if (!account.email) return alert("please insert a email");
    if (!account.login.username) return alert("please insert a username");
    if (!account.login.password) return alert("please insert a password");
    if (!pass) return alert("please insert a password confirmation");
    if (account.login.password != pass) {
      setPass("");
      return alert(
        "The password and the password confirmation need to be identical"
      );
    }
    if (d === "done") return;
    dispatchAccount({
      type: "addAccount",
      account: { ...account, login: { ...account.login, userId: idGen() } },
    });
    setAccount({
      gender: "Unespecified",
      login: {
        userId: "",
        password: "",
        username: "",
      },
      name: {
        first: "",
        last: "",
      },
    });
    setPass("");
    return navigate("/logIn");
  };

  return {
    onLogIn,
    accountPage,
    verifyLogin,
    getUsers,
    accounts,
    myPostsPage,
    createAccountPage,
    getAccountInfo,
    getName,
    registerAccount,
    account,
    getLogin,
    getPassConfirm,
  };
};
