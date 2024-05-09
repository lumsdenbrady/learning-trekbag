export default function Item({ item, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(item.id);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <li className="item">
      <label>
        <input onChange={handleToggle} type="checkbox" checked={item.packed} />
        {item.text}
      </label>
      <button onClick={handleDelete}> X </button>
    </li>
  );
}
