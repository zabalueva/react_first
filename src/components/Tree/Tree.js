import './Tree.css';
import tree from '../Tree/tree.svg';


function Tree (props) {
    return (
        <div className="Tree">
            <img src = {tree} alt = "tree" className="XMasTree"></img>
        </div>
    )
}
export default Tree;