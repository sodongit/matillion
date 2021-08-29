import React from 'react';
import './divider.css';

const Divider = ({direction}) => {

    const getDividerDirection = () => direction === 'v' ?
        'divider-container divider-vertical' :
        'divider-container divider-horizontal';


    return (
        <div data-testid="divider" className={getDividerDirection()}>
            <div className="divider-line"/>
        </div>
    );
}

export default Divider;

export const DividerCorner = () => <div data-testid="divider" className="divider-corner"/>;
