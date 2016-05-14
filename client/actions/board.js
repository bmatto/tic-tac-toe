import actionTypes from '../constants/ActionTypes.js'

export function setSquare(index, player) {
  return { type: actionTypes.SET_SQUARE, index, player }
}

export function togglePlayer(player) {
  return { type: actionTypes.TOGGLE_PLAYER, player }
}
