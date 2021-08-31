import React, {useEffect, useState} from 'react';
import './inGameMessage.css';
export const InGameMessage = ({stateOfPlay = '', player, resetGame}) => {

    const [message, setMessage] = useState(stateOfPlay);

    useEffect(() => {
        switch (stateOfPlay) {
            case '':
                setMessage(<NextPlayer player={player}/>)
                break;
            case 'draw':
                setMessage(<ItsADraw/>);
                break;
            default:
                setMessage(<ItsAWinner winner={stateOfPlay}/>);
                break;
        }

    }, [stateOfPlay, player])


    return (
        <div className="messages">
            {message}
        </div>
    );
};

const ItsADraw = () => {
    return (
        <div data-testid="draw">
            <h3>Its a draw</h3>
            <p>Press the reset button to play again</p>
        </div>
    );
};
const NextPlayer = ({player}) => {
    return (
        <div data-testid="next">
            <h3>Next to play is {player}</h3>
        </div>
    );
};

const ItsAWinner = ({winner}) => {
    return (
        <div data-testid="winner">
            <h3>We have a winner its {winner}</h3>
            <p>Press the reset button to play again</p>
        </div>
    );
};

