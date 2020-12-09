import { useState, useEffect } from 'react';
import './App.css';
import Circle from '../Circle';
import Tree from '../Tree';
import tree from '../Tree/tree.svg';
/* import treeC from '../../../public/img/treeCopy.svg'; */

function App() {
  let [top, setTop] = useState(12);
  let [left, setLeft] = useState(1);

  useEffect(() => {
    console.log(top);
  }, [top])


  function moveDown() {
    setTop(top + 10);
  }

  function moveRight() {
    setLeft(left + 10);
  }


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

    </div>
  );
}

export default App;
