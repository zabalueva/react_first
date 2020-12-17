import { useState } from 'react';
import GiftFoodInfo from '../GiftFoodInfo';
import GiftGitInfo from '../GiftGitInfo';
import Gift1 from '../Gifts/Gift1.svg';
import Gift2 from '../Gifts/Gift2.svg';
import Gift3 from '../Gifts/Gift3.svg';
import './Gifts.css';


/* import GiftThreeInfo from '../GiftGitInfo/GiftGitInfo'; */

function Gifts() {
    const [firstGift, setFirstGift] = useState(false);
    const [secondGift, setSecondGift] = useState(false);
    /* const [thirdGift, setThirdGift] = useState(false); */

    function getFirstGift() {
        setFirstGift(true);  
    }
    function getSecondGift() {
        setSecondGift(true);
    }
    /* function thirdGift() {
        return <GiftVKInfo/>       
    } */

    return (
        <div className="wrapGifts">

            <div className="Gifts">
                <img src={Gift1} alt="gift" title="Подарок GitHub" className="Gift" onClick={getFirstGift}></img>
                <img src={Gift2} alt="gift" className="Gift" onClick={getSecondGift}></img>
                <img src={Gift3} alt="gift" className="Gift" onClick={getSecondGift}></img>
            </div>
            <div>
                {firstGift &&
                    <GiftGitInfo />
                }
                {secondGift &&
                    <GiftFoodInfo />
                }</div>
            {/* {name &&
                    <div className="GiftDescr">
                    <p> Имя: {name} </p>
                    <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
                    <img src={avatar} alt={name} className='avatar'></img>
                    </div>
                } */}

        </div>
    );

}
export default Gifts;