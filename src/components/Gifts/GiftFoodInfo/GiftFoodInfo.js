import { useState, useEffect } from 'react';
import './GiftFoodInfo.scss';

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
    
    useEffect(() => {
        setTimeout(() => document.title = `A time of gifts!`, 3000);
    }, [])

    return (
        <div className="GiftDescr" >
            
            { meal &&
                <div className="mealDescr" >
                    <p className="mealDescr1" id="meal"> Ваш подарок - идея для праздничного блюда! Попробуйте {meal} </p>
                    <img src={imgMeal} alt={meal} className='meal' id="meal"></img>
                </div>
            }
            <p id="meal"></p>
        </div>   
                
        );
}

export default GiftFoodInfo;
