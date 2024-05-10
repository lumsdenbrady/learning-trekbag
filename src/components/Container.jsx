import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const initialItems = [
  {
    id: 1,
    text: "Phone Charger",
    packed: true,
  },
  {
    id: 2,
    text: "Underwear",
    packed: false,
  },
  {
    id: 3,
    text: "Good Vibes",
    packed: false,
  },
];
export default function Container() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    const currentTime = new Date().getTime();
    const newItem = { id: currentTime, text: text, packed: false };
    setItems([...items, newItem]);
  };
  const deleteItem = (id) => {
    //delete an item using its id
    setItems((prev) => {
      const newItems = prev.filter((item) => {
        return item.id !== id;
      });
      return newItems;
    });
  };
  const togglePacked = (id) => {
    setItems((prev) => {
      const newItems = prev.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      });
      return newItems;
    });
  };
  const deleteAllItems = () => {
    setItems([]);
  };
  const resetToInitial = () => {
    setItems(initialItems);
  };
  const markAllAsPacked = () => {
    setItems((prev) => {
      const newItems = prev.map((item) => {
        return { ...item, packed: true };
      });

      return newItems;
    });
  };
  const markAllAsUnpacked = () => {
    setItems((prev) => {
      const newItems = prev.map((item) => {
        return { ...item, packed: false };
      });

      return newItems;
    });
  };

  const totalNumberOfItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed == true).length;
  return (
    <>
      <main>
        <Header
          totalNumberOfItems={totalNumberOfItems}
          totalPackedItems={totalPackedItems}
        />
        <ItemList onDelete={deleteItem} onToggle={togglePacked} items={items} />
        <Sidebar
          onAddItem={addItem}
          onDeleteAllItems={deleteAllItems}
          onMarkAllAsPacked={markAllAsPacked}
          onResetToInitial={resetToInitial}
          onMarkAllAsUnpacked={markAllAsUnpacked}
        />
      </main>
      <Footer />
    </>
  );
}
