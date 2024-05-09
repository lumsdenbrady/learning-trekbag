export default function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.text}
      </label>
      <button> X </button>
    </li>
  );
}
