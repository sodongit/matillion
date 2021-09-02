import React, {memo} from 'react';
import './square.css';

const Square = memo(({type, id,  onclick}) => {

    let Component = type(id);

    const playerSelect = () => {
        onclick(id);
    };

    return (
        <div data-testid="square" className="square" onClick={playerSelect}>
            <Component/>
        </div>
    );
});

export default Square;