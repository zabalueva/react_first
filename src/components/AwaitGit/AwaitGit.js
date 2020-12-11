import { useState, useEffect } from 'react';
import Gift1 from '../Gifts/Gift1.svg';
import '../Gifts/Gift.css';

function AwaitGit() {
    let [name, setName] = useState('');
    let [dateCreate, setDate] = useState('');
    let [days, setDays] = useState('');


    async function getDataGit() {
        /*         let response = await fetch('/article/promise-chaining/user.json');
                let user = await response.json(); */
        let githubResponse = await fetch(`https://api.github.com/users/zabalueva`);
        let githubUser = await githubResponse.json();
        setName(githubUser.name);
        setDate(githubUser.created_at);

        return githubUser;
    }
    useEffect(() => {
        getDataGit()
    }, [])

    function getDateCreate() {
        setDays(() => {
            let currentDate = new Date();
            let formatDate = new Date(Date.parse(dateCreate));
            days = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
            console.log(days.toFixed(0));
            console.log(name);
        })
        return  <p>{days.toFixed(0)} дней вы на гитхабе!</p> 
    }


    return (
        <div className="AwaitGit">
            <p> Имяf: {name} </p>            
            <img src = {Gift1} alt = "giftbox" className = "Gift1" onClick={getDateCreate}></img>
     
            <p>`${days}` дней вы на гитхабе!</p>

        </div>
    )
}
export default AwaitGit;