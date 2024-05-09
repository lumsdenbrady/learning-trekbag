import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      <Button label="Mark all as packed" type="secondary" />
      <Button label="Mark all as unpacked" type="secondary" />
      <Button label="Reset to initial" type="secondary" />
      <Button label="Delete all" type="secondary" />
    </section>
  );
}
