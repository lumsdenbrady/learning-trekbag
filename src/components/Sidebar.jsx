import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ onAddItem }) {
  return (
    <section className="sidebar">
      <AddItemForm onAddItem={onAddItem} />
      <ButtonGroup />
    </section>
  );
}
