import { ADD_ARTICLE } from "../constants/action-types";
import { BOX_CLICK } from "../constants/action-types";
import { JUMP_TO_MOVE } from "../constants/action-types";


// Action example
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const boxClick = boxId => ({ type: BOX_CLICK, payload: boxId });
export const jumpToMove = moveNum => ({ type: JUMP_TO_MOVE, payload: moveNum });