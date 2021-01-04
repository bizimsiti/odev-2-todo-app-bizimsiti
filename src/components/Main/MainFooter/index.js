import React from "react";

function MainFooter({
  todos,
  setTodos,
  setSituation,
  filteredTodos,
  situation,
}) {
  // handle all-active-completed tasks
  const handleSituation = (e) => {
    setSituation(e.target.text);
  };

  // clear all completed tasks
  const clearCompleted = () => {
    const list = todos.filter((todo) => todo.completed !== true);
    setTodos(list);
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredTodos.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            id="all"
            href="#"
            onClick={handleSituation}
            className={situation === "All" ? "selected" : null}
          >
            All
          </a>
        </li>
        <li>
          <a
            id="active"
            href="#"
            onClick={handleSituation}
            className={situation === "Active" ? "selected" : null}
          >
            Active
          </a>
        </li>
        <li>
          <a
            id="completed"
            href="#"
            onClick={handleSituation}
            className={situation === "Completed" ? "selected" : null}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default MainFooter;
