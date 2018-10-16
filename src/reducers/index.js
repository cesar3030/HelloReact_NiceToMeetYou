import { ADD_ARTICLE, BOX_CLICK, JUMP_TO_MOVE } from "../constants/action-types";

const initialState = {
  history: [{
    squares: Array(9).fill(null),//[null,null,'X','O','X','O',null,null,null]//
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
      return boxClick(state, action.payload);
    case JUMP_TO_MOVE:
      return jumpToMoveClick(state, action.payload);
    default:
      return state;
  }
};

const jumpToMoveClick = (state, moveNum) => {
  console.log(moveNum)
  state = {...state, stepNumber: moveNum, xIsNext: moveNum%2 === 0};
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  return {...state, winner: calculateWinner(current)};
};

const boxClick = (state, boxId) => {
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