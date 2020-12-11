import './Tree.css';
import tree from '../Tree/tree.svg';
import Circle from '../Circle';
import Coords from '../Coords/Coords';

function Tree (props) {


    return (
        <div className="Tree">
            <img src = {tree} alt = "tree" className="XMasTree" onClick={Coords}></img>
        </div>
    )
}
export default Tree;