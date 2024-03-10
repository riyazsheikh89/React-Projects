import MenuList from "./MenuList";
import "./TreeView.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
    <h1>Tree view / Menu view / Recursive view</h1>
        <MenuList list={menus}/>
    </div>
  );
};

export default TreeView;
