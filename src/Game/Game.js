import React, {useEffect, useState} from 'react';
import Board from "../components/board/board";
import {checkBoard} from "../components/board/components/stateOfPlay";


const emptyBoard = ['', '', '', '', '', '', '', '', '', '',];


function Game() {

    const [board, setBoard] = useState(emptyBoard);

    const [turn, setTurn] = useState('X');

    const [stateOfPlay, setStateOfPlay] = useState('');

    useEffect(() => {
        const gameState = checkBoard(board);
        if (gameState !== '') {
            setStateOfPlay(gameState);
        }
    },[board]);

    const changeTurn = () => {
        const nextTurn = turn === `X` ? 'O' : 'X';
        setTurn(nextTurn);
    }

    const insertIcon = (squareId) => {
        if (board[squareId] === '' && stateOfPlay === '') {
            const boardCopy = [...board];
            boardCopy[squareId] = turn;
            setBoard(boardCopy);
            if (stateOfPlay === '') {
                changeTurn();
            }
        }
    }

    const getSquare = (id) => board[id];


    return (
        <div>
            <Board getSquare={getSquare} insertIcon={insertIcon}/>
        </div>
    );
}


export default Game;
