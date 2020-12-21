import { useState, useEffect } from 'react';
import './GiftFoodInfo.css';

function GiftFoodInfo() {
    const [meal, setMeal] = useState('');
    const [imgMeal, setImgMeal] = useState('');

    async function giveData() {
        const mealFind = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const mealsy = await mealFind.json()
        const mealsArray = mealsy.meals;
        const titleMeal = mealsArray[0].strMeal;
        const picMeal = mealsArray[0].strMealThumb;

        setMeal(titleMeal);
        setImgMeal(picMeal);
    }

    useEffect(() => {
        giveData()
    }, [])

    return (
            <div className="mealDescr">{
                meal &&
                <div className="GiftDescr">
                    <p> Ваш подарок - идея для новогоднего стола! {meal} </p>
                    <img src={imgMeal} alt={meal} className='meal'></img>
                </div>
            }</div>       
    );
}

export default GiftFoodInfo;
