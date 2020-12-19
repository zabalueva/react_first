import { useState} from 'react';
import './App.css';

import tree from './tree.svg';
import Circle from '../Circle';
import Gifts from '../Gifts';


function App() {
  const [coordX, setX] = useState('');
  const [coordY, setY] = useState('');
  const [circles, setCircles] = useState([]);
  
 

  function addCircle(e) {
    setX(e.pageX);
    setY(e.pageY);
    setCircles([...circles, { coordX: coordX, coordY: coordY, id: circles.length }]);
    console.log(circles.length);
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
