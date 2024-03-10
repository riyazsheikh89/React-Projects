import MenuItem from "./MenuItem";
import "./TreeView.css";

const MenuList = ({list = []}) => {
  return (
    <ul className="menu-list-container">
      {
        list && list.length
        ? list.map((item, idx) => <MenuItem key={idx} item={item} />)
        : null
      }
    </ul>
  )
}

export default MenuList;
