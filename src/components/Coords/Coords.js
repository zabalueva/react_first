import React from 'react';

function Coords(el) {
    /* let Coord = onClick = (e) => { */
        const element = el.target.getBoundingClientRect();
        const x = element.left;
        const y = element.top;
        console.log(x, y);

        return (
            <div>
                DIV1

                <div onClick={Coords}>
                    DIV2
                </div>
            </div>
        );
    
    }


export default Coords;