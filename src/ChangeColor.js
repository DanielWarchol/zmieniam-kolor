import React, {useState} from 'react';
import  './ChangeColor.css';


function ChangeColor() {

    const [textColor, setTextColor] = useState();

    return (
        <div className="color-main">
            <h1 className="text-color-red">Zmieniam Kolor</h1>
            
            <button className="btn">red</button>
            <button className="btn">green</button>
            <button className="btn">blue</button>
            
        </div>
    )
}

export default ChangeColor;
