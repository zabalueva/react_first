import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import Gift1 from '../Gifts/Gift1.svg';
import Gift2 from '../Gifts/Gift2.svg';
import Gift3 from '../Gifts/Gift3.svg';
import styles from './Gifts.module.scss';

import GiftFoodInfo from './GiftFoodInfo';
import GiftGitInfo from './GiftGitInfo';
import GiftFunInfo from './GiftFunInfo';

function Gifts() {
    const [firstGift, setFirstGift] = useState(false);
    const [secondGift, setSecondGift] = useState(false);
    const [thirdGift, setThirdGift] = useState(false);

    function getFirstGift() {
        setFirstGift(true);
    }
    function getSecondGift() {
        setSecondGift(true);
    }
    function getThirdGift() {
        setThirdGift(true);
    }

    const Jump = styled.div`animation: 6s ${keyframes`${bounce}`} infinite`;

    return (
        <div className={styles.wrapGifts}>

            <Jump >
                <div className={styles.Gifts}>
                    
                        <img src={Gift1} alt="gift" title="Подарок GitHub" className={styles.Gift} onClick={getFirstGift}></img>
                    
                        <img src={Gift2} alt="gift" title="Подарок Food" className={styles.Gift} onClick={getSecondGift}></img>
                    
                    <img src={Gift3} alt="gift" title="Подарок Animation" className={styles.Gift} onClick={getThirdGift}></img>
                </div>
            </Jump >

            {firstGift &&
                <GiftGitInfo/>
            }
            {secondGift &&
                <GiftFoodInfo id="meal"/>
            }
            {thirdGift &&
                <GiftFunInfo />
            }
        </div>
    );

}
export default Gifts;