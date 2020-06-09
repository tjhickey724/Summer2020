import React, {useState} from 'react';
import BgColor from "./BgColor";


const FontDemo = () => {

    const [fontSize,setFontSize]= useState("24pt")
    function handleSelectFontEvent(event){
        setFontSize(event.target.value)
    }

    const [fontColor,setFontColor]= useState("black")

    const [bgColor,setBgColor]= useState("white")



    const divStyle =
      {fontSize:fontSize, color:fontColor, backgroundColor:bgColor}

    return (
        <div style={divStyle}>
          <h2>Font Demo</h2>
          <p>
            Here we create and use state to change the style of this page.
          </p>
          
          font size:
          <select value={fontSize} onChange={handleSelectFontEvent}>
            <option>12pt</option>
            <option>24pt</option>
            <option>36pt</option>
          </select>
          <br />

          font color:
          <select value={fontColor} onChange={event => setFontColor(event.target.value)}>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
          </select>
          <br />

          <BgColor bgColor={bgColor} setBgColor={setBgColor} />
        </div>
      )
}

export default FontDemo;
