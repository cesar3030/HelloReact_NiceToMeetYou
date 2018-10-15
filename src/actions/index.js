import { ADD_ARTICLE } from "../constants/action-types";
import { BOX_CLICK } from "../constants/action-types";


// Action example
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const boxClick = boxId => ({ type: BOX_CLICK, payload: boxId });