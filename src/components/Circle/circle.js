import './Circle.scss';

function Circle(props) {
    const { position } = props;
    const colorArray = ['#f44336', '#e91e63', '#9c27b0',
                        '#673ab7', '#3f51b5', '#2196f3', 
                        '#03a9f4', '#00bcd4', '#CDDC39']
    const style = {
        backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)],
        ...position
    }
    
    return (
        <div className="circle" style={style}>       
        </div>
        
    )
}
export default Circle;