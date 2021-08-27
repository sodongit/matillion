import React from 'react';
import './square.css';

const Square = ({type}) => {

    return (
        <div data-testid="square" className="square">
            <div className={type}/>
        </div>
    );
}

export default Square;