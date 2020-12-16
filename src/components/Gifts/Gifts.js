
import Gift1 from '../Gifts/Gift1.svg';
import Gift2 from '../Gifts/Gift2.svg';
import Gift3 from '../Gifts/Gift3.svg';
/* import './GiftGitInfo.css'; */
import GiftGitInfo from '../GiftGitInfo';
import GiftVKInfo from '../GiftVKInfo';
/* import GiftThreeInfo from '../GiftGitInfo/GiftGitInfo'; */

function Gifts() {
    function firstGift() {
        return <GiftGitInfo/>       
    }
    function secondGift() {
        return <GiftVKInfo/>       
    }
    /* function thirdGift() {
        return <GiftVKInfo/>       
    } */

    return (     
            <div className="wrapGifts">
    
                <div className="Gifts">
                    <img src={Gift1} alt="gift" title="Подарок GitHub" className="Gift" onClick={firstGift}></img>
                    <img src={Gift2} alt="gift" className="Gift" onClick={<GiftVKInfo/>}></img>
                    <img src={Gift3} alt="gift" className="Gift" onClick={secondGift}></img>
                </div>
    
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