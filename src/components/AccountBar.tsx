import { LogInButton } from "./LogInButton";
import { MyPosts } from "./MyPosts";
import { UserButton } from "./UserButton";

export const AccountBar = () => {
  return sessionStorage.getItem("currentAccount") ? (
    <div className="mr-7 flex flex-row">
      <MyPosts />
      <UserButton />
    </div>
  ) : (
    <div className="mr-7">
      <LogInButton />
    </div>
  );
};
