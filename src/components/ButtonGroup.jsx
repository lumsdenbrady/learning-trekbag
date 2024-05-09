import Button from "./Button";

export default function ButtonGroup({
  onMarkAllAsUnpacked,
  onResetToInitial,
  onMarkAllAsPacked,
  onDeleteAllItems,
}) {
  return (
    <section className="button-group">
      <Button
        onClick={onMarkAllAsPacked}
        label="Mark all as packed"
        type="secondary"
      />
      <Button
        onClick={onMarkAllAsUnpacked}
        label="Mark all as unpacked"
        type="secondary"
      />
      <Button
        onClick={onResetToInitial}
        label="Reset to initial"
        type="secondary"
      />
      <Button onClick={onDeleteAllItems} label="Delete all" type="secondary" />
    </section>
  );
}
