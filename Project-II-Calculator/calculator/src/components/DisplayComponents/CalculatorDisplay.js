import React from 'react';
import './Display.css';

// import React from 'react';
// import './Display.css';


function CalcDisplay(props){
    return(
        <div className = "calc-display">
            <h2>{props.current}</h2>
        </div>
    );
}

export default CalcDisplay;