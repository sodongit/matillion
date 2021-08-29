import React from 'react';
import './board.css';
import Square from "./components/square/square";
import Divider, {DividerCorner} from "./components/divider/divider";

const Board = () => {

    return (
        <div data-testid="board" className="board">
            <Square/><Divider direction="v"/><Square/><Divider direction="v"/><Square/>
            <div className="horizonal-divider"><Divider direction="h"/><DividerCorner/><Divider direction="h"/><DividerCorner/><Divider direction="h"/></div>
            <Square/><Divider direction="v"/><Square/><Divider direction="v"/><Square/>
            <div className="horizonal-divider"><Divider direction="h"/><DividerCorner/><Divider direction="h"/><DividerCorner/><Divider direction="h"/></div>
            <Square/><Divider direction="v"/><Square/><Divider direction="v"/><Square/>
        </div>
    );
}

export default Board;