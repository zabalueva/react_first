import { useState, useEffect } from 'react';
import './GiftGitInfo.css';

function GiftGitInfo() {
    const [login, setLogin] = useState('');
    const [name, setName] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [days, setDays] = useState('');
    

    function handleInput(e) {
        setLogin(e.target.value);
    }

    useEffect(() => {
        document.title = `A time of gifts!`
    }, [])

    function giveData() {
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(githubUserData => new Promise((resolve, reject) => {

                setName(githubUserData.name);
                setAvatar(githubUserData.avatar_url);

                let currentDate = new Date();
                let formatDate = new Date(Date.parse(githubUserData.created_at));
                const calc = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
                setDays(calc.toFixed(0));
            }))
    }

    return (
        <div className="GiftDescr">
            <p> Вы выбрали подарок, использующий API GitHub. Введите свой логин </p>
            <input value={login} onChange={handleInput} />
            <button onClick={giveData}>Узнать повод для праздника!</button>

            {name &&
                <div>
                    <p> Имя: {name} </p>
                    <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
                    <img src={avatar} alt={name} className='avatar'></img>
                </div>
            }

        </div>
    );
}

export default GiftGitInfo;
