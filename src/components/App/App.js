import { useState } from 'react';
import './App.css';
import '../Gifts/Gift.css';

import Circle from '../Circle';
import GiftGitInfo from '../GiftGitInfo/GiftGitInfo';
import tree from '../Tree/tree.svg';
/* import Gift2 from '../Gifts/Gift2.svg'; */

function App() {
  const [circles, setCircles] = useState([]);
  const [coordX, setX] = useState('10');
  const [coordY, setY] = useState('10');
  const [gifts, setGifts] = useState([]);

  function addCircle(e) {
    setCircles([...circles, { coordX: coordX, coordY: coordY, id: circles.length }]);
    setX(e.pageX);
    setY(e.pageY);

    if (circles.length === 1) {
      alert(`Ёлка наряжена, теперь вперёд за подарками!`);
      addGifts();
    }
    console.log(coordX);
    console.log(coordY);
    console.log(circles.length);
  }

  function addGifts() {
    setGifts([...gifts, { id: gifts.length }]);
    console.log(gifts.length);
  }


  return (
    <div className="App">
      <div className="wrap">
        <p className='description'>Вы можете нарядить ёлку, просто кликнув по ней!</p>

        <p className='GiftsAll'>
          {gifts.map(() => {
            return <GiftGitInfo
              key={gifts.length}
            />
          })}
        </p>

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


    </div>
  );
}

export default App;
