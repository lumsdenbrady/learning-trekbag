import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";

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
  const [items, setItems] = useState(initialItems);

  const addItem = (text) => {
    const currentTime = new Date().getTime();
    const newItem = { id: { currentTime }, text: text, packed: false };
    setItems([...items, newItem]);
  };
  const deleteItem = (id) => {
    //delete an item using its id
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
      console.log(newItems);
      return newItems;
    });
  };
  const deleteAllItems = () => {};
  const resetToInitial = () => {};
  const markAllAsPacked = () => {};
  const markAllAsUnpacked = () => {};

  return (
    <>
      <main>
        <Header />
        <ItemList onToggle={togglePacked} items={items} />
        <Sidebar onAddItem={addItem} />
      </main>
      <Footer />
    </>
  );
}
