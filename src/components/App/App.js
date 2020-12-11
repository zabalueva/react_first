import { useState, useEffect } from 'react';
import './App.css';
import '../Gifts/Gift.css';

import Circle from '../Circle';
import Tree from '../Tree';

import tree from '../Tree/tree.svg';
import Coords from '../Coords/Coords';



function useAwaitGit() {
  let [name, setName] = useState('');
  /* let [dateCreate, setDate] = useState(''); */

  async function getDataGit() {
    /*         let response = await fetch('/article/promise-chaining/user.json');
            let user = await response.json(); */
    let githubResponse = await fetch(`https://api.github.com/users/zabalueva`);
    let githubUser = await githubResponse.json();
    setName(githubUser.name);
    /* setDate(githubUser.created_at); */
  }
  useEffect(() => {
    getDataGit()
  }, [])

  return name
}



function App() {
  let [top, setTop] = useState(12);
  let [left, setLeft] = useState(1);
  let [coordx, setX] = useState('');
  let [coordy, setY] = useState('');

/*   useEffect(() => {
    console.log(top);
  }, [top]) */

  function moveDown() {
    setTop(top + 50);
  }

  function moveRight() {
    setLeft(left + 50);
  }

  /* function Coords(c) {
    let element = c.target.getBoundingClientRect();
    setX(() => {
      coordx = element.left;
    })
    setY(() => {
      coordy = element.top;
      console.log(coordx, coordy);
    })
    return Circle
  } */

  return (
    <div className="App">
      <div className="wrap">
        <Circle
          color={'red'}
          position={{ top: top, left: left }}
        />
        <Circle
          color={'blue'}
          position={{ top: top + 50, left: left + 45 }}
        />
        <Tree
          image={'url(' + tree + ')'}
          color={'green'}
          
        />
        <Coords 
          color={'blue'}
          top={50}
          left={45 }
        />
      </div>
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
