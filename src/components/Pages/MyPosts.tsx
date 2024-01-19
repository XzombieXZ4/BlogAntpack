import { useContext } from "react";
import { NavBar, CreateBtn, CreatePost, MyPostsList } from "../";
import { BlogContext } from "../../context/BlogContext";

export const MyPosts = () => {
  const { currentUser } = useContext(BlogContext);
  return (
    <>
      <NavBar />
      {currentUser ? (
        <div className="animate__animated animate__backInDown  h-full flex flex-col overflow-hidden overflow-y-auto mt-20 ">
          <MyPostsList />
          <CreatePost />
          <CreateBtn />
        </div>
      ) : (
        <div className="flex flex-row h-full items-center">
          <div className="lg:text-8xl w-full flex flex-col md:text-4xl">
            <span className="self-center text-center">
              Ops.... it looks like you are not logged in
            </span>
          </div>
        </div>
      )}
    </>
  );
};
