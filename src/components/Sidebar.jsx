import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  onAddItem,
  onMarkAllAsUnpacked,
  onResetToInitial,
  onMarkAllAsPacked,
  onDeleteAllItems,
}) {
  return (
    <section className="sidebar">
      <AddItemForm onAddItem={onAddItem} />
      <ButtonGroup
        onDeleteAllItems={onDeleteAllItems}
        onMarkAllAsPacked={onMarkAllAsPacked}
        onResetToInitial={onResetToInitial}
        onMarkAllAsUnpacked={onMarkAllAsUnpacked}
      />
    </section>
  );
}
