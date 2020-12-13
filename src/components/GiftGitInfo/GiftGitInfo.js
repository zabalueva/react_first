import { useState } from 'react';
import Gift1 from '../Gifts/Gift1.svg';
import '../Gifts/Gift.css';


function GiftGitInfo() {
    let [name, setName] = useState('');
    let [avatar, setAvatar] = useState('');
    let [days, setDays] = useState('');

    function giveData() {
        let user = prompt('Введите ваше имя на github', "username");
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(githubUserData => new Promise((resolve, reject) => {

                setName(githubUserData.login);
                setAvatar(githubUserData.avatar_url);

                let currentDate = new Date();
                let formatDate = new Date(Date.parse(githubUserData.created_at));
                const calc = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
                setDays(calc.toFixed(0));
            }))
    }

    return (
        <div className="GiftGitInfo">
            <button onClick={giveData}>
                Получить подарочную информацию!
            </button>
            <div>
                <p> Имя: {name} </p>
                <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
                <img src={avatar} alt={name} className='avatar'></img></div>

        </div>
    );
}

export default GiftGitInfo;
