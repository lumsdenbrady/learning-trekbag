import { useMemo, useState } from "react";
import EmptyState from "./EmptyState";
import Item from "./Item";
import Select from "react-select";

export default function ItemList({ items, onToggle, onDelete }) {
  const options = [
    { value: "default", label: "Sort By Default" },
    { value: "unpacked", label: "Sort By Unpacked" },
    { value: "packed", label: "Sort By Packed" },
  ];
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    const itemsToSort = items;
    if (sortBy.value === "default") {
      return itemsToSort;
    } else if (sortBy.value === "unpacked") {
      return itemsToSort.sort((a, b) => {
        return a.packed - b.packed;
      });
    } else if (sortBy.value === "packed") {
      return itemsToSort.sort((a, b) => {
        return b.packed - a.packed;
      });
    } else {
      return itemsToSort;
    }
  }, [items, sortBy]);
  return (
    <ul className="item-list">
      <Select
        styles={{
          container: (styles) => ({
            ...styles,
            padding: "15px 28px",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
            fontSize: "13px",
          }),
          menu: (styles) => ({
            ...styles,
            padding: "0px",
            fontSize: "13px",
            width: "90%",
          }),
        }}
        // className="sorting"
        options={options}
        value={sortBy}
        onChange={setSortBy}
      />
      {items.length > 0 ? (
        sortedItems.map((item) => {
          return (
            <Item
              onDelete={onDelete}
              onToggle={onToggle}
              key={item.id}
              item={item}
            />
          );
        })
      ) : (
        <EmptyState />
      )}
    </ul>
  );
}
