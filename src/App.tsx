import { BlogPage } from "./components/Pages/BlogPage";
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
