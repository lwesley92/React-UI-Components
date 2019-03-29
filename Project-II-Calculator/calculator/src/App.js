import React from 'react';
import './App.css'; 
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const numbersArray = [
  {text: "clear", buttonStyle: 'number action'},
  {text: "7", buttonStyle: 'number'},
  {text: "8", buttonStyle: 'number'},
  {text: "9", buttonStyle: 'number'},
  {text: "4", buttonStyle: 'number'},
  {text: "5", buttonStyle: 'number'},
  {text: "6", buttonStyle: 'number'},
  {text: "1", buttonStyle: 'number'},
  {text: "2", buttonStyle: 'number'},
  {text: "3", buttonStyle: 'number'},
  {text: "0", buttonStyle: 'number action'},
];

const mathSignsArray = [
  {text: "÷", buttonStyle: 'number sign'},
  {text: "x", buttonStyle: 'number sign'},
  {text: "-", buttonStyle: 'number sign'},
  {text: "+", buttonStyle: 'number sign'},
  {text: "=", buttonStyle: 'number sign'},
];

const displayNumber = 0;

const App = () => {


    return (
      <div className = "calculator">
        <CalculatorDisplay current = {displayNumber} />
        <div className = "boxes">
          <div className = "box-content-number">
           {numbersArray.map(button => <NumberButton button={button} />)}
          </div>
  
          <div className = "box-content-signs">
            {mathSignsArray.map(button => <ActionButton button={button} />)}
          </div>
        </div>
      </div>
    );
  };

export default App;
