import { BlogPage } from "./components/BlogPage";
import { BlogProvider } from "./context/BlogContext";

export const App = () => {
  return (
    <>
      <BlogProvider>
        <BlogPage />
      </BlogProvider>
    </>
  );
};
