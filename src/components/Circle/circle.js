import  './Circle.css';

function Circle(props) {
    const { color, position } = props;
    const style = {
        backgroundColor: color,
        ...position
    }

    return (
        <div className="circle" style={style} >       
        </div>
        
    )
}
export default Circle;