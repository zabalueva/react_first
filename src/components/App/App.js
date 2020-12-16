import { useState } from 'react';
import './App.css';
import tree from '../Tree/tree.svg';
import Circle from '../Circle';
import Gifts from '../Gifts';

import GiftGitInfo from '../GiftGitInfo';
import GiftVKInfo from '../GiftVKInfo';


function App() {
  const [circles, setCircles] = useState([]);
  const [coordX, setX] = useState('10');
  const [coordY, setY] = useState('10');
  const [gifts, setGifts] = useState([]);

  function addCircle(e) {
    setCircles([...circles, { coordX: coordX, coordY: coordY, id: circles.length }]);
    setX(e.pageX);
    setY(e.pageY);

    /* if (circles.length === 10) {
      alert(`Ёлка наряжена, теперь вперёд за подарками!`);
      addGifts();
    } */   
    //arg.shift
  }

  function addGifts() {
    setGifts([...gifts, { id: gifts.length }]);
    console.log(gifts.length);
  }

  return (
    <div className="App">
      <div className="wrap">
        <p className='description'>Вы можете нарядить ёлку, просто кликнув по ней!</p>
        
       {/*  <div className='GiftsAll'>{
          gifts.map(() => {
            return <GiftVKInfo
              key={gifts.length}
            />
          })
        }
        </div> */}

        <div className="Tree">
          <img src={tree} alt="XMastree" className="XMasTree" onClick={addCircle}></img>
        </div>    
      </div>
      
      {(circles.length >= 10) &&
        <Gifts /> 
      }
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
