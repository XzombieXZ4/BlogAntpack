import { UserButton, LogInButton, MyPostsButton } from "../";

export const AccountBar = () => {
  return sessionStorage.getItem("currentAccount") ? (
    <div className="col-start-6 grid grid-cols-3">
      <MyPostsButton />
      <UserButton />
    </div>
  ) : (
    <div className="col-start-6 grid grid-cols-3">
      <LogInButton />
    </div>
  );
};
