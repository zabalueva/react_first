import { useState, useEffect } from 'react';
import './GiftGitInfo.scss';

function GiftGitInfo() {
    const [login, setLogin] = useState('');
    const [name, setName] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [days, setDays] = useState('');
    let daysStr = days.toString();

    function handleInput(e) {
        setLogin(e.target.value);
    }

    useEffect(() => {
        setTimeout(() => document.title = `A time of gifts!`, 3000);
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
            }
            ))
    }


    return (
        <div className="GiftDescr" id="git">
            <p> Вы выбрали подарок, использующий API GitHub. Введите свой логин </p>
            <input value={login} onChange={handleInput} />
            <button onClick={giveData}>Узнать повод для праздника!</button>

            {name &&
                <div>
                    <p> Имя: {name} </p>
                    <p> Вы на github уже {days}

                        {(+daysStr.match(/\d\b/g) === 1) ?
                            <span> день</span> :
                            ((+daysStr.match(/\d\b/g) === 2) ||
                                (+daysStr.match(/\d\b/g) === 3) ||
                                (+daysStr.match(/\d\b/g) === 4)) ?
                                <span> дня</span> : <span> дней</span>
                        }
                    ! Это точно повод для праздника!
                    </p>
                    <img src={avatar} alt={name} className='avatar'></img>
                </div>
            }
        </div>
    );
}

export default GiftGitInfo;
