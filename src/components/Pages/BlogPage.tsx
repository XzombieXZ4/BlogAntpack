import { Route, Routes } from "react-router-dom";
import { MyPosts, AccountPage, Home, CreateAccount } from "../";

export const BlogPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<AccountPage />} />
        <Route path="/MyPosts" element={<MyPosts />} />
        <Route path="/accountRegister" element={<CreateAccount />} />
      </Routes>
    </>
  );
};
