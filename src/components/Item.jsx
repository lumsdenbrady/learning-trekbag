import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Item({ item, onToggle, onDelete }) {
  const [hover, setHover] = useState(false);
  const handleToggle = () => {
    onToggle(item.id);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <li className="item">
      <label>
        <input onChange={handleToggle} type="checkbox" checked={item.packed} />
        {item.text}
      </label>
      <button onClick={handleDelete}>
        <span
          className="trash"
          style={{ "--fa-animation-iteration-count": 1 }}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faTrash} shake={hover} />
        </span>
      </button>
    </li>
  );
}
