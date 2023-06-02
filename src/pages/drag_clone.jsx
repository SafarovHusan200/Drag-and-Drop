import React from "react";
import "./drag.css";
import { useState } from "react";

const Item = ({ id, text }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ border: "2px solid green", marginTop: "10px" }}
    >
      {text}
    </div>
  );
};

const DropTarget = ({ onDrop, children }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    console.log("onDrop", id);
    onDrop(id);
  };

  return (
    <div
      style={{ border: "2px solid red", padding: "5px", minHeight: "80%" }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default function DragClone() {
  const [items2, setItems2] = useState([
    { id: "item1", text: "Item 1" },
    { id: "item2", text: "Item 2" },
    { id: "item3", text: "Item 3" },
    { id: "item4", text: "Item 4" },
  ]);
  const [items3, setItems3] = useState([{ id: "item5", text: "Item 5" }]);

  const handleDrop1 = (id) => {
    // Add Items2
    const filterItem = items3.find((item) => item.id === id);
    setItems2((currentItem) => {
      return [...currentItem, filterItem];
    });

    // Filtered Items3
    const updateItems = items3.filter((item) => item.id !== id);
    setItems3(updateItems);
  };

  const handleDrop2 = (id) => {
    //   Add Items3
    const findItem = items2.find((item) => item.id === id);
    setItems3((prev) => {
      return [...prev, findItem];
    });

    // Filtered Items2
    const filtereedItems = items2.filter((item) => item.id !== id);
    setItems2(filtereedItems);
  };
  return (
    <div className="container">
      <h1>Drag and Drop in 2 Table</h1>

      <div className="row">
        <div className="col">
          <DropTarget onDrop={handleDrop1}>
            <div>Drop here 1</div>
            {items2.map((item) => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </DropTarget>
        </div>
        <div className="col">
          <DropTarget onDrop={handleDrop2}>
            <div>Drop here 2</div>

            {items3.map((item) => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </DropTarget>
        </div>
      </div>
    </div>
  );
}
