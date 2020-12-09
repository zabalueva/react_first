import './Tree.css';

function Tree (props) {
    const { image, color } = props;
    const style = {
        backgroundImage: image,
        color: color
    }

    return (
        <div className="Tree" style={style}>
        </div>
    )
}
export default Tree;