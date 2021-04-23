import React, {useColor} from 'react';
import  './ChangeColor.css';


function ChangeColor() {


    return (
        <div className="color-main">
            <h1 className="text-h1">Zmieniam Kolor</h1>
            
            <button className="btn">red</button>
            <button className="btn">green</button>
            <button className="btn">blue</button>
            
        </div>
    )
}

export default ChangeColor;
