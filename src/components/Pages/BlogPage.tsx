import { Route, Routes } from "react-router-dom";
import { NavBar } from "../Navbar/NavBar";
import { Home } from "./Home";
import { AccountPage } from "./AccountPage";
import { MyPosts } from "./MyPosts";

export const BlogPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<AccountPage />} />
        <Route path="/MyPosts" element={<MyPosts />} />
      </Routes>
    </>
  );
};
