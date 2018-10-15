import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  history: [{
    squares: [null,null,'X','O','X','O',null,null,null]//Array(9).fill(null)
  }],
  stepNumber: 0,
  xIsNext: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

const boxPlayed = (history, action) => {

}

export default rootReducer;