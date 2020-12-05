/* import logo from './logo.svg'; */
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Circle from '../Circle';

function App() {
  let [top, setTop] = useState(12);
  let [left, setLeft] = useState(1);

  useEffect(() => {
    console.log(top);
  }, [top])


  function moveDown() {
    setTop(top + 10);
    console.log(top);
  }

  function moveRight() {
    setLeft(left + 10);
    console.log(top);
  }


  return (
    <div className="App">
      <p>
        <b>top
          </b>
      </p>
      <Circle 
        color={'red'}
        position={{ top: top, left: left }}
      />
      <Circle 
        color={'blue'}
        position={{ top: top + 50, left: left + 45 }}
      />
      <button onClick={moveDown}>
        Двигать вниз
      </button>

      <button onClick={moveRight}>
        Двигать вправо
      </button>

      Hello
    </div>
  );
}

export default App;
