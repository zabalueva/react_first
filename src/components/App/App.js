import { useState } from 'react';
import './App.css';

import tree from '../Tree/tree.svg';
import Circle from '../Circle';
import Gifts from '../Gifts';


function App() {
  const [circles, setCircles] = useState([]);
  const [coordX, setX] = useState('10');
  const [coordY, setY] = useState('10');

  function addCircle(e) {
    setCircles([...circles, { coordX: coordX, coordY: coordY, id: circles.length }]);
    setX(e.pageX);
    setY(e.pageY);
  }

  return (
    <div className="App">
      <div className="wrap">
        <p className='description'>Вы можете нарядить ёлку, просто кликнув по ней!</p>

        <div className="Tree">
          <img src={tree} alt="XMastree" className="XMasTree" onClick={addCircle}></img>
        </div>    
      </div>     
      
      <div>{
        circles.map(({ coordX, coordY, id }) => {
          return <Circle
            key={id}
            color={'blue'}
            position={{ top: coordY, left: coordX }}
          />
        })
      }</div>

      {(circles.length >= 2) &&
        <Gifts /> 
      }

    </div>
  );
}

export default App;
