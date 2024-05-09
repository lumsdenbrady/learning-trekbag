import EmptyState from "./EmptyState";
import Item from "./Item";

export default function ItemList({ items, onToggle }) {
  return (
    <ul className="item-list">
      {/* <Select /> */}

      {items.map((item) => {
        return <Item onToggle={onToggle} key={item.id} item={item} />;
      })}

      {/* <EmptyState /> */}
    </ul>
  );
}
