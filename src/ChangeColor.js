import React, {useColor} from 'react';
import  './ChangeColor.css';


function ChangeColor() {

    const [color, useColor] = useColor([]);
    const [buttonValue, setButtonValue] = useColor('');  
    
  

    return (
        <div className="color-main">
            <h1>Zmieniam Kolor</h1>
            
            <button className="btn">red</button>
            <button className="btn">green</button>
            <button className="btn">blue</button>
            
        </div>
    )
}

export default ChangeColor;
