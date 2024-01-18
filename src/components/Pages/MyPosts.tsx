import { CreateBtn } from "../CreateBtn";
import { CreatePost } from "../CreatePost";
import { MyPostsList } from "../MyPostsList";
import { NavBar } from "../Navbar/NavBar";

export const MyPosts = () => {
  return (
    <>
      <NavBar />
      <div className="animate__animated animate__backInDown flex flex-col overflow-hidden overflow-y-auto mt-20 ">
        <MyPostsList />
      </div>
      <CreatePost />
      <CreateBtn />
    </>
  );
};
