// Uncomment this when you have some actionTypes to import
// import ActionTypes from 'constants/ActionTypes'
import createReducer from 'utils/createReducer'
import actionTypes from '../constants/ActionTypes'
import { clone } from 'ramda'

const initialState = {
  player: 'O',
  squares: (num => {
    const tokens = []

    for (let i = 0; i < num; i += 1) {
      tokens.push({
        value: ''
      })
    }
    return tokens
  })(9)
}

const handlers = {
  // Pattern:
  // [ActionTypes.ACTION_NAME]: actionFunction
  [actionTypes.SET_SQUARE]: setSquare,
  [actionTypes.TOGGLE_PLAYER]: togglePlayer
}

export default createReducer(initialState, handlers)

// Define action functions here
function setSquare(state, action) {
  const squares = clone(state.squares)

  squares[action.index].value = action.player
  return Object.assign({}, state, { squares })
}

function togglePlayer(state, action) {
  return Object.assign({}, state, {
    player: action.player === 'O' ? 'X' : 'O'
  })
}
