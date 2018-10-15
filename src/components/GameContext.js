import Game from './Game';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
  }
}

const GameContext = connect(
  mapStateToProps
)(Game);

export default GameContext;