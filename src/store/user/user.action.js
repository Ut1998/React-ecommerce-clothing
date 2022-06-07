import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.type";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};
