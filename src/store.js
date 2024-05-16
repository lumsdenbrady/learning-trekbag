import {create} from "zustand";

export const useStore = ((set) => ({
    items: [],
    initialItems: [
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
      ],
      addItem: (text)=> set((state)=>({

        items: [...state.items,
            {id : new Date().getTime(),
                text,
                packed: false,
            }]
    })), 
    deleteItem: (id) => set((state) =>({
items: state.items.filter((item)=>item.id !== id)
    }))
}))