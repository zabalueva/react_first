import { useState } from 'react';
import Gift1 from '../Gifts/Gift1.svg';
import Gift2 from '../Gifts/Gift2.svg';
import Gift3 from '../Gifts/Gift3.svg';
import './GiftGitInfo.css';

function GiftGitInfo() {
    const [name, setName] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [days, setDays] = useState('');
    const [login, setLogin] = useState(false);

    function giveData() {
        setLogin()
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
    }

    return (
        <div className="wrapGifts">

            <div className="Gifts">
                <img src={Gift1} alt="gift" title="Подарок GitHub" className="Gift" onClick={giveData}></img>
                <img src={Gift2} alt="gift" className="Gift" onClick={giveData}></img>
                <img src={Gift3} alt="gift" className="Gift" onClick={giveData}></img>
            </div>

            {name &&
                <div className="GiftGitDescr">
                <p> Имя: {name} </p>
                <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
                <img src={avatar} alt={name} className='avatar'></img>
                </div>
            }

        </div>
    );
}

export default GiftGitInfo;
