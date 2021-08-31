import React from 'react';
import './button.css';
export const Button = React.memo(({text = "", onclick = () => {}}) => {
    return <div data-testid="button" className="button-container">
        <button className="example_d" onClick={onclick}>{text}</button>
    </div>;
});
