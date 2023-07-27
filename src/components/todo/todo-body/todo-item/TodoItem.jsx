import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({
  id,
  isEdit,
  title,
  setTodos,
  deleteTodo,
  editTodo,
  completeTodo,
  isCompleted,
  isHidden,
}) => {
  const [v, setV] = useState(title);
  return (
    <div
      className="todo-body-item"
      style={{ display: isCompleted && isHidden ? "none" : "block" }}
    >
      <button
        onClick={() => {
          completeTodo(id);
        }}
      >
        Done
      </button>
      {isEdit ? (
        <input
          type="text"
          value={v}
          onChange={(e) => {
            setV(e.target.value);
          }}
        />
      ) : (
        <h1
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "red" : "black",
          }}
        >
          {title}
        </h1>
      )}
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
        <AiFillDelete />
      </button>
      <button
        onClick={() => {
          editTodo(id);
          if (isEdit) {
            setTodos((prev) => {
              return prev.map((item) => {
                if (item.id === id) {
                  return {
                    ...item,
                    title: v,
                  };
                }
                return item;
              });
            });
          }
        }}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default TodoItem;
