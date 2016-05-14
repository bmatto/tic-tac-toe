import React, { PropTypes } from 'react'
import classnames from 'classnames'
import styles from './board.scss'

const propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  player: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func
}

export default function Square(props) {
  const classNames = classnames(
    styles.square,
    styles[`player${props.value}`]
  )

  return (
    <div onClick={props.onSquareClick.bind(
      this,
      props.index,
      props.player
    )} className={classNames}>
      {props.value}
    </div>
  )
}

Square.propTypes = propTypes
