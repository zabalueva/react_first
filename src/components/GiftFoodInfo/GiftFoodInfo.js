import { useState, useEffect } from 'react';

import './GiftFoodInfo.css';

function GiftFoodInfo() {
    const [meal, setMeal] = useState(false);
    const [imgMeal, setImgMeal] = useState('');

    async function giveData() {
        const mealFind = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const mealsy = await mealFind.json()
        const mealsArrray = mealsy.meals;
        const titleMeal = mealsArrray[0].strMeal;
        const picMeal = mealsArrray[0].strMealThumb;

        setMeal(titleMeal);
        setImgMeal(picMeal);
    }

    useEffect(() => {
        document.title = `A time of gifts!`
    }, [meal])

    return (
        <div className="wrapGifts">
            

            <div className="mealDescr">{
                meal &&
                <div className="GiftDescr">
                    <p className='description'> На вашем праздничном столе обязательно должно быть: {meal} </p>
                    <img src={imgMeal} alt={meal} className='meal'></img>
                </div>
            }</div>

        </div>
    );
}

export default GiftFoodInfo;
