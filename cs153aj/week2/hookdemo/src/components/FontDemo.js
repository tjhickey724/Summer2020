import React, {useState} from 'react';


const FontDemo = () => {
    const [fontSize,setFontSize]= useState("24pt")
    function handleSelectFontEvent(event){
      const fontSize = event.target.value;
      if (fontSize.endsWith("pt")) {
        setFontSize(event.target.value)
      }

    }

    const [fontColor,setFontColor]= useState("black")
    function handleSelectColorEvent(event){
      setFontColor(event.target.value)
    }

    const [bgColor,setBgColor]= useState("white")
    function handleSelectBgColorEvent(event){
      setBgColor(event.target.value)
    }


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
          <select value={fontColor} onChange={handleSelectColorEvent}>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
          </select>
          <br />
          background color:
          <select value={bgColor} onChange={handleSelectBgColorEvent}>
            <option>black</option>
            <option>white</option>
            <option>green</option>
          </select>
        </div>
      )
}

export default FontDemo;
