import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Item from "../Item/Item";
export default function ToDoList() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("item_list");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("item_list", JSON.stringify(items));
  }, [items]);

  const addData = (Element) => {
    setItems((pram) => {
      const arr = [...pram];
      arr.unshift({ text: Element, id: Date.now() });
      return arr;
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  return (
    <div>
      <Input addData={addData} />
      {items.length !== 0 ? (
        items.map((item, _id) => <Item item={item} key={_id} deleteItem={deleteItem}/>)
      ) : (
        <p className="show">No goals found. Maybe add one?</p>
      )}
    </div>
  );
}
