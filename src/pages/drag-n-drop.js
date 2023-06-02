import React, { useEffect, useState } from "react";

const Item = ({ id, text }) => {
  const handleDragStart = (event) => {
    console.log("DragStart", id);
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ border: "2px solid green" }}
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
    console.log("handleDrop", id);
    onDrop(id);
  };

  return (
    <div
      style={{ border: "2px solid red" }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

const DragAndDrop = () => {
  const [items, setItems] = useState([
    { id: "item1", text: "Item 1" },
    { id: "item2", text: "Item 2" },
    { id: "item3", text: "Item 3" },
  ]);

  const [items2, setItems2] = useState([{ id: "item4", text: "Item 4" }]);

  const handleDrop = (id) => {
    setItems2((currentItem) => {
      return [...currentItem, items.find((item) => item.id === id)];
    });

    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // const [count, setCount] = useState({ a: [], b: 1 });

  // const handleClick = () => {
  //   setCount((currentData) => {
  //     currentData.a.push(currentData.a.length);
  //     console.log(currentData);
  //     return { ...currentData };
  //   });
  // };

  // useEffect(() => {
  //   console.log("update count");
  //   return () => {};
  // }, [count.a]);

  return (
    <>
      {items.map((item) => (
        <Item key={item.id} id={item.id} text={item.text} />
      ))}
      <DropTarget onDrop={handleDrop}>
        <div>Drop here</div>
        {items2.map((item) => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </DropTarget>

      {/* <button onClick={handleClick}>Button</button> */}
    </>
  );
};

export default DragAndDrop;
