import React, { useState } from "react";
import KanbanListContainer from "./kanban-list.container";
import KanbanListItemContainer from "./kanban-list-item.container";
import KanbanColumnHeaderContainer from "./kanban-column-header.container";
import KanbanColumnContainer from "./kanban-column.container";

import "./kanban.css";
const genColumns = (columnCount = 10, rowCount = 10) => {
  const result = [];
  for (let i = 0; i < columnCount; i++) {
    result.push({
      id: i,
      title: `Column ${i + 1} title`,
      tasks: [],
    });
    for (let j = 0; j < rowCount; j++) {
      result[i].tasks.push({
        id: `${i}-${j}`,
        fullName: `Full Name ${i}-${j}`,
      });
    }
  }
  return result;
};
export default function KanbanContainer() {
  const [columns, setColumns] = useState(genColumns());
  return (
    <div className="kanban-container">
      <div className="kanban-component">
        {columns.map(column => {
          return (
            <KanbanColumnContainer key={column.id}>
              <KanbanColumnHeaderContainer />
              <KanbanListContainer>
                {column.tasks.map(task => {
                  return <KanbanListItemContainer key={task.id} />;
                })}
              </KanbanListContainer>
            </KanbanColumnContainer>
          );
        })}
      </div>
    </div>
  );
}
