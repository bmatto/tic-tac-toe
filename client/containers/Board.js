import { connect } from 'react-redux'
import Board from '../components/Board'
import { setSquare, togglePlayer } from '../actions/board'

const mapStateToProps = state => ({
  squares: state.app.squares,
  player: state.app.player
})

const mapDispatchToProps = dispatch => ({
  onSquareClick: (index, player) => {
    dispatch(setSquare(index, player))
    dispatch(togglePlayer(player))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
