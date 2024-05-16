import {create} from "zustand";
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
export const useStore = create((set) =>({
items: initialItems,
removeAllItems: () => set(() => ({items: []})),
addItem: (text) => set(() => (
    const currentTime = new Date().getTime();
    const newItem = { id: currentTime, text: text, packed: false };
    return {items: [...items, newItem]}))
}))


// //const addItem = (text) => {
//     const currentTime = new Date().getTime();
//     const newItem = { id: currentTime, text: text, packed: false };
//     setItems([...items, newItem]);
//   };
//   const deleteItem = (id) => {
//     //delete an item using its id
//     setItems((prev) => {
//       const newItems = prev.filter((item) => {
//         return item.id !== id;
//       });
//       return newItems;
//     });
//   };
//   const togglePacked = (id) => {
//     setItems((prev) => {
//       const newItems = prev.map((item) => {
//         if (item.id === id) {
//           return { ...item, packed: !item.packed };
//         } else {
//           return item;
//         }
//       });
//       return newItems;
//     });
//   };
//   const deleteAllItems = () => {
//     setItems([]);
//   };
//   const resetToInitial = () => {
//     setItems(initialItems);
//   };
//   const markAllAsPacked = () => {
//     setItems((prev) => {
//       const newItems = prev.map((item) => {
//         return { ...item, packed: true };
//       });

//       return newItems;
//     });
//   };
//   const markAllAsUnpacked = () => {
//     setItems((prev) => {
//       const newItems = prev.map((item) => {
//         return { ...item, packed: false };
//       });

//       return newItems;
//     });
//   };