import GiftGitInfo from '../GiftGitInfo/GiftGitInfo';

function GetCaptureGift1(props) {
    let { name, days, avatar } = props;

    return (
        <div>
            <p> Имя: {name} </p>
            <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
            <img src={avatar} alt={name} className='avatar'></img>
        </div>
    )
}
export default GetCaptureGift1;