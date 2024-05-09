export default function Item({ item, onToggle }) {
  const handleToggle = () => {
    onToggle(item.id);
  };
  return (
    <li className="item">
      <label>
        <input onChange={handleToggle} type="checkbox" checked={item.packed} />
        {item.text}
      </label>
      <button> X </button>
    </li>
  );
}
