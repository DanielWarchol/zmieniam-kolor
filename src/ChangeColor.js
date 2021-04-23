import React, {useState} from 'react';
import  './ChangeColor.css';


function ChangeColor() {

    const [textColor, setTextColor] = useState('text-color-black');
    const [inputText , setInputText] = useState('');

    return (
        <div className="color-main">
            <h1 className={textColor}>Zmieniam Kolor</h1>
            
            <input type="text" className="text"></input><br />
            <button className="btn" onClick={()=>setTextColor('text-color-red')}>red</button>
            <button className="btn" onClick={()=>setTextColor('text-color-green')}>green</button>
            <button className="btn" onClick={()=>setTextColor('text-color-blue')}>blue</button>
        </div>
    )
}

export default ChangeColor;
