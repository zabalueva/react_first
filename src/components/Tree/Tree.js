import './Tree.css';

function Tree (props) {
    const { image, color } = props;
    const style = {
        backgroundImage: image,
        color: color
    }

    return (
        <div className="tree" style={style}>
        Здесь должно быть дерево
        </div>
    )
}
export default Tree;