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

    }, [stateOfPlay])


    return (
        <div className="messages">
            {message}
        </div>
    );
};

const ItsADraw = () => {
    return (
        <div>
            its a draw
        </div>
    );
};
const NextPlayer = ({player}) => {
    return (
        <div>
            next to play is
        </div>
    );
};

const ItsAWinner = ({winner}) => {
    return (
        <div>
            we have a winner its {winner}
        </div>
    );
};

