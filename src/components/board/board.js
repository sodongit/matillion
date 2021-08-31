import React from 'react';
import './board.css';
import Square from "./components/square/square";
import {Divider, DividerCorner} from "./components/divider/divider";

const Board = ({getSquare, insertIcon}) =>
        <div data-testid="board" className="board">
            <Square type={getSquare} id="0" onclick={insertIcon}/><Divider direction="v"/>
            <Square type={getSquare} id="1" onclick={insertIcon}/><Divider direction="v"/>
            <Square type={getSquare} id="2" onclick={insertIcon}/>
            <HorizontalDivider/>
            <Square type={getSquare} id="3" onclick={insertIcon}/><Divider direction="v"/>
            <Square type={getSquare} id="4" onclick={insertIcon}/><Divider direction="v"/>
            <Square type={getSquare} id="5" onclick={insertIcon}/>
            <HorizontalDivider/>
            <Square type={getSquare} id="6" onclick={insertIcon}/><Divider direction="v"/>
            <Square type={getSquare} id="7" onclick={insertIcon}/><Divider direction="v"/>
            <Square type={getSquare} id="8" onclick={insertIcon}/>
        </div>;


export default Board;

const HorizontalDivider = () => <div className="horizonal-divider">
    <Divider direction="h"/>
    <DividerCorner/>
    <Divider direction="h"/>
    <DividerCorner/>
    <Divider direction="h"/>
</div>;