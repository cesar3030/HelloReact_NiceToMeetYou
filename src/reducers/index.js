import { ADD_ARTICLE } from "../constants/action-types";
import { BOX_CLICK } from "../constants/action-types";

const initialState = {
  history: [{
    squares: [null,null,'X','O','X','O',null,null,null]//Array(9).fill(null)
  }],
  stepNumber: 0,
  xIsNext: true,
  winner: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case BOX_CLICK:
      return boxClic(state, action.payload);
    default:
      return state;
  }
};

const boxClic = (state, boxId) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();

  if (state.winner || squares[boxId]) {
    return state;
  }

  squares[boxId] = state.xIsNext ? 'X' : 'O';

  return Object.assign({...state,
    history: history.concat([{
      squares: squares
    }]),
    stepNumber: history.length,
    xIsNext: !state.xIsNext,
    winner: calculateWinner(squares),
  });
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default rootReducer;