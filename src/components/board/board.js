import React, {useState} from 'react';
import './board.css';
import Square from "./components/square/square";
import Divider, {DividerCorner} from "./components/divider/divider";

const emptyBoard = ['', '', '', '', '', '', '', '', '', '',];

const Board = () => {

    const [board, setBoard] = useState(emptyBoard);

    const [turn, setTurn] = useState('X');

    const changeTurn = () => {
        const nextTurn = turn === `X` ? 'O' : 'X';
        setTurn(nextTurn);
    }

    const insertIcon = (squareId) => {
        if (board[squareId] === '') {
            const boardCopy = [...board];
            boardCopy[squareId] = turn;
            setBoard(boardCopy);
            changeTurn();
        }
    }

    const getSquare = (id) => board[id];


    return (
        <div data-testid="board" className="board">
            <Square type={getSquare} id="0" onclick={insertIcon}/><Divider direction="v"/><Square type={getSquare} id="1"
                                                                                               onclick={insertIcon}/><Divider
            direction="v"/><Square type={getSquare} id="2" onclick={insertIcon}/>
            <div className="horizonal-divider"><Divider direction="h"/><DividerCorner/><Divider
                direction="h"/><DividerCorner/><Divider direction="h"/></div>
            <Square type={getSquare} id="3" onclick={insertIcon}/><Divider direction="v"/><Square type={getSquare} id="4"
                                                                                               onclick={insertIcon}/><Divider
            direction="v"/><Square type={getSquare} id="5" onclick={insertIcon}/>
            <div className="horizonal-divider"><Divider direction="h"/><DividerCorner/><Divider
                direction="h"/><DividerCorner/><Divider direction="h"/></div>
            <Square type={getSquare} id="6" onclick={insertIcon}/><Divider direction="v"/><Square type={getSquare} id="7"
                                                                                               onclick={insertIcon}/><Divider
            direction="v"/><Square type={getSquare} id="8" onclick={insertIcon}/>
        </div>
    );
}

export default Board;