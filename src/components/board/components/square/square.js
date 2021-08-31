import React, {useEffect, useState} from 'react';
import './square.css';
import {Cross} from "../cross/cross";
import {Circle} from "../circle/circle";

const Square = ({type, id,  onclick}) => {

    const [icon, setIcon] = useState('');

    useEffect(() => {
        const iconTypes = {
            'X': <Cross />,
            'O': <Circle date-testid="circle"/>,
            '': ''
        }


        const iconType = iconTypes[type(id)]

        setIcon(iconType);
    }, [type, id]);

    const playerSelect = () => {
        onclick(id);
    };

    return (
        <div data-testid="square" className="square" onClick={playerSelect}>
            {icon}
        </div>
    );
}

export default Square;