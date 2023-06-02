import React from "react";

import "./kanban-list.css";

export default function KanbanListContainer({ children }) {
  return <div className="kanban-list-container">{children}</div>;
}
