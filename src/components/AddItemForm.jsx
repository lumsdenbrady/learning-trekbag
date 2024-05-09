import { useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [value, setValue] = useState("");
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      alert("Item can not be empty");
      return;
    } else {
      onAddItem(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Item"
        value={value}
        onChange={handleValueChange}
      ></input>
      <Button label="Add Item" />
    </form>
  );
}
