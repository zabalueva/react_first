import React from 'react';
import Circle from '../Circle';

function Coords(props) {
    const { color, top, left } = props;
    const style = {
        backgroundColor: color,
        top, left
    }

    let x = left.pageX;
    let y = top.pageY;
    console.log(x, y);

    return (
        <div className="circle" style={style} >
        </div>
        
    )
}




export default Coords;