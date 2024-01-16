import { useBlog } from "../hooks/useBlog";
import { BlogList } from "./BlogList";

const { getBlog } = useBlog();
getBlog();
export const Home = () => {
  return (
    <>
      <BlogList />
    </>
  );
};
