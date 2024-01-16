import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { AccountPage } from "./AccountPage";

export const BlogPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<AccountPage />} />
      </Routes>
    </>
  );
};
