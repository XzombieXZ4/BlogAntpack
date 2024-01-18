import { PostList } from "./PostList";
import { NavBar } from "./NavBar";
export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="animate__animated animate__backInDown flex flex-col overflow-hidden overflow-y-auto mt-20 ">
        <PostList />
      </div>
    </>
  );
};
