import React, { useState } from "react";
import "./draganddrop-4.css";

const Item = ({ id, text }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", id);
  };
  return (
    <div draggable onDragStart={handleDragStart} className="list-item">
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
    onDrop(id);
  };

  return (
    <div
      style={{ padding: "5px" }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default function DragAndDrop4() {
  const [items1, setItems1] = useState([
    { id: "item1", text: "Item 1" },
    { id: "item2", text: "Item 2" },
  ]);
  const [items2, setItems2] = useState([
    { id: "item3", text: "Item 3" },
    { id: "item4", text: "Item 4" },
  ]);
  const [items3, setItems3] = useState([
    { id: "item5", text: "Item 5" },
    { id: "item6", text: "Item 6" },
  ]);
  const [items4, setItems4] = useState([
    { id: "item7", text: "Item 7" },
    { id: "item8", text: "Item 8" },
  ]);

  const handleDrop1 = (id) => {
    // Add Items1
    let findItem = items2.find((item) => item.id === id)
      ? items2.find((item) => item.id === id)
      : items3.find((item) => item.id === id)
      ? items3.find((item) => item.id === id)
      : items4.find((item) => item.id === id);
    if (findItem) {
      setItems1((prev) => {
        return [...prev, findItem];
      });
    }

    // Filtered Items2/3/4
    setItems2(items2.filter((item) => item.id !== id));
    setItems3(items3.filter((item) => item.id !== id));
    setItems4(items4.filter((item) => item.id !== id));
  };

  const handleDrop2 = (id) => {
    // Add Items2
    let findItem = items1.find((item) => item.id === id)
      ? items1.find((item) => item.id === id)
      : items3.find((item) => item.id === id)
      ? items3.find((item) => item.id === id)
      : items4.find((item) => item.id === id);
    if (findItem) {
      setItems2((prev) => {
        return [...prev, findItem];
      });
    }

    // Filtered Items2/3/4
    setItems1(items1.filter((item) => item.id !== id));
    setItems3(items3.filter((item) => item.id !== id));
    setItems4(items4.filter((item) => item.id !== id));
  };

  const handleDrop3 = (id) => {
    // Add Items3
    let findItem = items1.find((item) => item.id === id)
      ? items1.find((item) => item.id === id)
      : items2.find((item) => item.id === id)
      ? items2.find((item) => item.id === id)
      : items4.find((item) => item.id === id);
    if (findItem) {
      setItems3((prev) => {
        return [...prev, findItem];
      });
    }

    // Filtered Items1/3/4
    setItems1(items1.filter((item) => item.id !== id));
    setItems2(items2.filter((item) => item.id !== id));
    setItems4(items4.filter((item) => item.id !== id));
  };

  const handleDrop4 = (id) => {
    // Add Items4
    let findItem = items1.find((item) => item.id === id)
      ? items1.find((item) => item.id === id)
      : items2.find((item) => item.id === id)
      ? items2.find((item) => item.id === id)
      : items3.find((item) => item.id === id);
    if (findItem) {
      setItems4((prev) => {
        return [...prev, findItem];
      });
    }

    // Filtered Items1/2/3
    setItems1(items1.filter((item) => item.id !== id));
    setItems2(items2.filter((item) => item.id !== id));
    setItems3(items3.filter((item) => item.id !== id));
  };
  return (
    <div className="container4">
      <h1>Way2Job project Drag and Drop in To Do</h1>
      <div className="row">
        <div className="col">
          <DropTarget onDrop={handleDrop1}>
            <div className="title">To Do 1</div>
            {items1.map((item) => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </DropTarget>
        </div>
        <div className="col">
          <DropTarget onDrop={handleDrop2}>
            <div className="title">To Do 2</div>
            {items2.map((item) => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </DropTarget>
        </div>
        <div className="col">
          <DropTarget onDrop={handleDrop3}>
            <div className="title">To Do 3</div>
            {items3.map((item) => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </DropTarget>
        </div>
        <div className="col">
          <DropTarget onDrop={handleDrop4}>
            <div className="title">To Do 4</div>
            {items4.map((item) => (
              <Item key={item.id} id={item.id} text={item.text} />
            ))}
          </DropTarget>
        </div>
      </div>
    </div>
  );
}
