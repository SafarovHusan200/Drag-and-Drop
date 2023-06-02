import React from "react";

export default function KanbanListItemComponent() {
  return (
    <div className="kanban-list-item-component">
      <div className="kanban-list-item-component__header">
        <div className="kanban-list-item-component__title">Christmas Banners</div>
      </div>
      <div className="kanban-list-item-component__actions">
        <div className="kanban-list-item-component__avatar">
          <img src="/images/avatar.jpg" width={20} height={20} alt="avatar image of male" />
        </div>
        <div className="kanban-list-item-component__labels">
          <div className="kanban-list-item-component__label">Label</div>
          <div className="kanban-list-item-component__label">Label</div>
          <div className="kanban-list-item-component__label">Label Label</div>
        </div>
      </div>
    </div>
  );
}
