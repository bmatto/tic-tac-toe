import React, { PropTypes } from 'react'
import Frame from '../layout/Frame'
import Container from '../layout/Container'
import Square from './square'
import Begin from './begin'
import styles from './board.scss'
import classnames from 'classnames'

const propTypes = {
  squares: PropTypes.array.isRequired,
  player: PropTypes.string,
  onSquareClick: PropTypes.func
}

export default function Board(props) {
  const frameClassNames = classnames(
    styles.boardFrame,
    styles[`player${props.player}`]
  )

  const squares = props.squares.map((square, index) =>
    <Square
        onSquareClick={props.onSquareClick}
        player={props.player}
        key={`sqaure-${index}`}
        {...square}
        index={index} />
  )

  return (
    <Container>
      <Frame className={frameClassNames}>
        {squares}
      </Frame>
    </Container>
  )
}

Board.propTypes = propTypes
