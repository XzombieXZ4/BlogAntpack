import { Account, BlogPosts } from "../interfaces";

type AccountAction =
  | { type: "addAccount"; account: Account }
  | { type: "deleteAccount"; account: Account };

type PostsAction =
  | { type: "addPost"; post: BlogPosts }
  | { type: "deletePost"; post: BlogPosts };

export const accountReducer = (state: Account[], action: AccountAction) => {
  const { type, account } = action;
  switch (type) {
    case "addAccount":
      return [...state, account];
    default:
      return state;
  }
};

export const postReducer = (state: BlogPosts[], action: PostsAction) => {
  const { type, post } = action;
  switch (type) {
    case "addPost":
      return [...state, post];
    default:
      return state;
  }
};
