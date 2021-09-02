import React from 'react';
import './square.css';

const Square = ({type, id,  onclick}) => {


    let Component = type(id);

    const playerSelect = () => {
        onclick(id);
    };

    return (
        <div data-testid="square" className="square" onClick={playerSelect}>
            <Component/>
        </div>
    );
}

export default Square;