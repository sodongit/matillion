import React, {useEffect, useState} from 'react';
import {Board} from "../components/board/board";
import './game.css';
import {checkBoard} from "../components/board/stateOfPlay";
import {InGameMessage} from "../components/in-game-message/inGameMessage";
import {Button} from "../shared/button/button";
import {Cross} from "../components/board/components/cross/cross";
import {Circle} from "../components/board/components/circle/circle";

const emptyBoard = ['', '', '', '', '', '', '', '', ''];


function Game() {

    const [board, setBoard] = useState(emptyBoard);

    const [turn, setTurn] = useState('X');

    const [stateOfPlay, setStateOfPlay] = useState('');

    useEffect(() => {
        const gameState = checkBoard(board);
        if (gameState !== '') {
            setStateOfPlay(gameState);
        }
    }, [board]);

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

    const getSquare = (id) => board[id] === '' ? "div" : board[id] === 'X' ? Cross : Circle

    const resetGame = () => {
        setBoard(emptyBoard);
        setTurn('X');
        setStateOfPlay('');
    };

    return (
        <div className="main">
            <Board getSquare={getSquare} insertIcon={insertIcon}/>
            <InGameMessage stateOfPlay={stateOfPlay} player={turn} resetGame={resetGame}/>
            <Button text="Reset game" onclick={resetGame}/>
        </div>
    );
}


export default Game;
