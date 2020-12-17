import { useState } from 'react';
import './GiftGitInfo.css';

function GiftGitInfo() {
    const [name, setName] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [days, setDays] = useState('');
    /* const [login, setLogin] = useState(false); */

    function giveData() {
        /* setLogin() */
        let user = prompt('Введите ваш логин на github', "username");
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(githubUserData => new Promise((resolve, reject) => {

                setName(githubUserData.name);
                setAvatar(githubUserData.avatar_url);

                let currentDate = new Date();
                let formatDate = new Date(Date.parse(githubUserData.created_at));
                const calc = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
                setDays(calc.toFixed(0));
            }))
        console.log(name)
    }


    return (
        <div className="GiftDescr">
            
           <button className="GiftDescr" onClick= {giveData}>Получить подарок </button>

            {name &&
                <div className="GiftDescr">
                <p> Имя: {name} </p>
                <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
                <img src={avatar} alt={name} className='avatar'></img>
                </div>
            }

        </div>
    );
}

export default GiftGitInfo;
