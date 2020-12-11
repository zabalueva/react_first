import { useState, useEffect } from 'react';
import Gift1 from '../Gifts/Gift1.svg';
import '../Gifts/Gift.css';

function useAwaitGit() {
    let [name, setName] = useState('');
    let [dateCreate, setDate] = useState('');

    async function getDataGit(name, dateCreate) {
        /*         let response = await fetch('/article/promise-chaining/user.json');
                let user = await response.json(); */
        let githubResponse = await fetch(`https://api.github.com/users/zabalueva`);
        let githubUser = await githubResponse.json();
        setName(githubUser.name);
        setDate(githubUser.created_at);      
    }
    useEffect(() => {
        getDataGit()
    }, [name]) 

    return (
        <div className="AwaitGit">  
        
        </div>
    )
}
export default useAwaitGit;