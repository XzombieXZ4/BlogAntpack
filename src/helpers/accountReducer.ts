import { Account } from "../interfaces";

type UserAction = { type: "addAccount"; account: Account };

export const accountReducer = (state: Account[], action: UserAction) => {
  switch (action.type) {
    case "addAccount":
      return [...state];
    default:
      return state;
  }
};
