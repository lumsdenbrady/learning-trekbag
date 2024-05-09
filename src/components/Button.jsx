export default function Button({ type, label, onClick }) {
  return (
    <button
      className={`btn ${type === "secondary" && "btn--secondary"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
