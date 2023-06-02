import React from "react";
import { Provider } from "react-redux";
// import store from "./store";
import MainPage from "./pages/main.page";
import DragAndDrop from "./pages/drag-n-drop";
import DragClone from "./pages/drag_clone";
import DragAndDrop4 from "./pages/dragAndDrop-4";

export default function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <MainPage /> */}
      {/* <DragAndDrop /> */}
      {/* <DragClone /> */}
      <DragAndDrop4 />
      {/* </Provider> */}
    </>
  );
}
