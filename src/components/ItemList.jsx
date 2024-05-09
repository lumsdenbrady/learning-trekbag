import EmptyState from "./EmptyState";
import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <ul className="item-list">
      {/* <Select /> */}

      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}

      {/* <EmptyState /> */}
    </ul>
  );
}
