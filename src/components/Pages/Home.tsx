import { CreatePost, CreateBtn, NavBar, PostList } from "../";
export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="animate__animated animate__backInDown grid overflow-hidden overflow-y-hidden mt-20 pt-2 ">
        <PostList />
      </div>
      <CreatePost />
      <CreateBtn />
    </>
  );
};
