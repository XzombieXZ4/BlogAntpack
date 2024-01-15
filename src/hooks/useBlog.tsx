import { useNavigate } from "react-router-dom";

export const useBlog = () => {
  const navigate = useNavigate();
  const accountPage = () => {
    navigate("/SingIn");
  };
  return {
    accountPage,
  };
};
