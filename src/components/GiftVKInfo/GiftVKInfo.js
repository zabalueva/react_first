import { useState, useEffect } from 'react';
import Gift1 from '../Gifts/Gift1.svg';
import Gift2 from '../Gifts/Gift2.svg';
import Gift3 from '../Gifts/Gift3.svg';
import './GiftVKInfo.css';

function GiftVKInfo() {
    const [meal, setMeal] = useState(false);
    const [imgMeal, setImgMeal] = useState('');
    /* const [days, setDays] = useState('');
    const [login, setLogin] = useState(false); */

    async function giveData() {
        const mealFind = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const mealsy = await mealFind.json()
        const mealsArrray = mealsy.meals;
        const array = mealsArrray[0];
        const titleMeal = array.strMeal;
        const picMeal = array.strMealThumb;

        setMeal(titleMeal);
        setImgMeal(picMeal);
                /* setAvatar(githubUserData.avatar_url);

                let currentDate = new Date();
                let formatDate = new Date(Date.parse(githubUserData.created_at));
                const calc = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
                setDays(calc.toFixed(0)); */
        console.log(array);
        console.log(titleMeal)
        console.log(meal)
            
    }
    

    return (
        <div className="wrapGifts">

            <div className="Gifts">
                <img src={Gift1} alt="gift" title="Подарок GitHub" className="Gift" onClick={giveData}></img>
                <img src={Gift2} alt="gift" className="Gift" onClick={giveData}></img>
                <img src={Gift3} alt="gift" className="Gift" onClick={giveData}></img>
            </div>

            {meal &&
                <div className="GiftGitDescr">
                <p> На вашем праздничном столе обязательно должно быть: {meal} </p>
                <img src={imgMeal} alt={meal} className='meal'></img>
                </div>
            }

        </div>
    );
}

export default GiftVKInfo;
