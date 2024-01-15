import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { AccountPage } from "./AccountPage";

export const BlogPage = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingIn" element={<AccountPage />} />
      </Routes>
    </>
  );
};
