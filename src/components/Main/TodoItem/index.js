import React from "react";

function TodoItem({ text, todos, setTodos, todo }) {
  const handleComplete = (e) => {
    const filtered = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodos(filtered);
  };
  const handleDelete = () => {
    const filtered = todos.filter((item) => item.id !== todo.id);
    setTodos(filtered);
  };
  return (
    <>
      <li className={todo.completed ? "completed" : null}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={handleComplete}
            checked={todo.completed ? true : false}
          />
          <label>{text}</label>
          <button className="destroy" onClick={handleDelete}></button>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
