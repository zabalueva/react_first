import { useState, useEffect } from 'react';
import './App.css';
import Circle from '../Circle';
import Tree from '../Tree';
/* import Coords from '../Coords/Coords'; */
import tree from '../Tree/tree.svg';
/* import treeC from '../../../public/img/treeCopy.svg'; */

function App() {
  let [top, setTop] = useState(12);
  let [left, setLeft] = useState(1);
  let [coordx, setX] = useState('');
  let [coordy, setY] = useState('');

  useEffect(() => {
    console.log(top);
  }, [top])

  function moveDown() {
    setTop(top + 50);
  }

  function moveRight() {
    setLeft(left + 50);
  }

  function Coords(c) {
    let element = c.target.getBoundingClientRect();
    setX(() => {
      coordx = element.left;
    })
    setY(() => {
      coordy = element.top;
      console.log(coordx, coordy);
    })
  }

 /*  function Coord() {
    let element = Circle.getBoundingClientRect();
        const x = element.left;
    const y = element.top;
    console.log(x, y);
  } */


  return (
    <div className="App">
      <p>
      </p>
      <Circle 
        color={'red'}
        position={{ top: top, left: left }}
      />
      <Circle 
        color={'blue'}
        position={{ top: top + 50, left: left + 45 }}
      />
      <Tree 
        image={'url('+tree+')'}
        color={'green'}
      />
      <button onClick={moveDown}>
        Двигать вниз
      </button>

      <button onClick={moveRight}>
        Двигать вправо
      </button>

      <button onClick={Coords}>
        Координаты
      </button>

    </div>
  );
}

export default App;
