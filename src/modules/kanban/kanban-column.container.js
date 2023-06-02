import React from "react";

import "./kanban-column.css";
import KanbanColumnComponent from "./kanban-column.component";

export default function KanbanColumnContainer({ children }) {
  return (
    <div className="kanban-column-container">
      <KanbanColumnComponent>{children}</KanbanColumnComponent>
    </div>
  );
}
