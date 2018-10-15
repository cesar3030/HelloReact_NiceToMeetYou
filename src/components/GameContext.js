import Game from './Game';
import { connect } from 'react-redux';
import { boxClick } from '../actions/index'

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBoxClick: id => {
      dispatch(boxClick(id));
    }
  }
}

const GameContext = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContext;