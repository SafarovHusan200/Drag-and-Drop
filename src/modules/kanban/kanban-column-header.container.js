import React from "react";

export default function KanbanColumnHeaderContainer({ header = "Header" }) {
  return (
    <div className="kanban-column-header-container">
      <div className="kanban-column-header-container__icon">
        <img src="/images/icon-notebook.png" width={16} alt="notebook icon image" />
      </div>
      <div className="kanban-column-header-container__title">{header}</div>
    </div>
  );
}
