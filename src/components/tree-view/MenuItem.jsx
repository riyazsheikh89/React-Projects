import { useState } from "react";
import MenuList from "./MenuList";
import "./TreeView.css";

const MenuItem = ({ item }) => {
  const [showChild, setShowChild] = useState({});

  const toggleChildren = (label) => {
    setShowChild({
      ...showChild,
      [label]: !showChild[label],
    });
  };

  return (
    <li className="menu-item-container">
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => toggleChildren(item.label)}>
            {showChild[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      showChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
