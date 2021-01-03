import { useState } from 'react';
import styles from './App.module.scss';

import tree from './tree.svg';
import Circle from '../Circle';
import Gifts from '../Gifts';

function App() {
  const [circles, setCircles] = useState([]);

  function addCircle(e) {
    setCircles(
      [...circles,
      { coordX: e.pageX, coordY: e.pageY, id: circles.length }
      ]
    )
  }


  return (
    <div className="App">
      <div className={styles.wrap}>

        <div className={styles.wrap_start}>
          <p className={styles.description}>Ёлка засветится огоньками, как только вы кликните по ней!</p>
          <p className={styles.description}> 10 огоньков и появятся подарки!</p>
          <img src={tree} alt="XMastree" className={styles.XMasTree} onClick={addCircle}></img>
        
          {(circles.length >= 10) &&
            <Gifts />
          }        
        </div>
      </div>

      <div className={styles.circle_array}>{
        circles.map(({ coordX, coordY, id }) => {
          return <Circle
            key={id}
            position={{ top: coordY, left: coordX }}
          />
        })
      }
      </div>

    </div>
  );
}

export default App;
