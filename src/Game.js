import React,{useState} from 'react'
import Board from './Board'
import calculateWinner from './Helper'

function Game() {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardCopy = [...board]
        console.log(boardCopy)
        if(winner || boardCopy[i]) return

        boardCopy[i] = xIsNext ? "0" : "X"
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }
  return (
    <div>
        <p>
            {
                winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "0": "X")
            }
        </p>
        <Board squares={board} onClick={handleClick} />

    </div>
  )
}

export default Game