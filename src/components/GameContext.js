import Game from './Game';
import { connect } from 'react-redux';
import { boxClick, jumpToMove } from '../actions/index'

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    winner: state.winner,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBoxClick: id => {
      dispatch(boxClick(id));
    },
    onJumpToMoveClick: num => {
      dispatch(jumpToMove(num));
    }
  }
}

const GameContext = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContext;