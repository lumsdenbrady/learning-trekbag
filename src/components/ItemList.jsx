import EmptyState from "./EmptyState";
import Item from "./Item";

export default function ItemList({ items, onToggle, onDelete }) {
  return (
    <ul className="item-list">
      {/* <Select /> */}
      {items.length > 0 ? (
        items.map((item) => {
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
