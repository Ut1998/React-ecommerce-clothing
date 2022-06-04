/* combine place where all our states live and from here
we will dispacth actions and send to reducer to update*/

import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWare = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined, composedEnhancer);
