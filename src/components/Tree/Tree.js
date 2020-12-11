import './Tree.css';
import tree from '../Tree/tree.svg';

function Tree (props) {
    /* const { image, color } = props;
    const style = {
        backgroundImage: image,
        color: color
    } */

    return (
        <div className="Tree" /* style={style} */>
            <img src = {tree} alt = "tree" className = "Tree"></img>
        </div>
    )
}
export default Tree;