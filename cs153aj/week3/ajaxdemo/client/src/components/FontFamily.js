import React from 'react';

const FontFamily = ({font,setFont}) => {
      return (
        <div>
          Font Family
          <select value={font} onChange={event=>setFont(event.target.value)}>
            <option>serif</option>
            <option>cursive</option>
            <option>sans-serif</option>
          </select>
        </div>
      )
}

export default FontFamily;
