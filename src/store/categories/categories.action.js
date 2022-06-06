import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.type";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
};
