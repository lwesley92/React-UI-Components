import React from 'react';
import './Button.css'; 

// import React from 'react';
// import './Button.css';

function ActionButton(props){
    return(
        <button className={props.button.buttonStyle} onClick={props.handleClick}>
            {props.button.text}
        </button>
    );
};


export default ActionButton;
