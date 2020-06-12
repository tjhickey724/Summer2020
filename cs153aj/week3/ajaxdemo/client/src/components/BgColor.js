import React from 'react';

const BgColor = ({bgColor,setBgColor}) => {
      return (
        <div>
          background color:
          <select value={bgColor} onChange={event=>setBgColor(event.target.value)}>
            <option>black</option>
            <option>white</option>
            <option>green</option>
          </select>
        </div>
      )
}

export default BgColor;
