import { useState, useEffect } from 'react';
import './App.css';
import '../Gifts/Gift.css';

import Circle from '../Circle';

import tree from '../Tree/tree.svg';

function App() {
  let [top, setTop] = useState(1);
/*   let [left, setLeft] = useState(1); */
  let [coordX, setX] = useState('');
  let [coordY, setY] = useState('');

  useEffect(() => {
    console.log(top);
  }, [top])

  function moveBall(event) {
    setX(event.pageX);
    setY(event.pageY);
  }

 /*  function moveDown() {
    setTop(top + 50);
  } */

  return (
    <div className="App">
      <div className="wrap">
        <Circle
          color={'red'}
          position={{ top: coordY, left: coordX }}
        />
       {/*  <Circle
          color={'blue'}
          position={{ top: top + 50, left: left + 45 }}
        /> */}
  
        <div className="Tree">
          <img src = {tree} alt = "XMastree" className="XMasTree" onClick={moveBall}></img>
        </div>
      </div>
      {/* <button onClick={moveDown}>
        Двигать вниз
      </button> */}

    </div>
  );
}

export default App;
