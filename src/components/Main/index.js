import TodoItem from "./TodoItem";
import MainFooter from "./MainFooter";
function Main({
  todos,
  setTodos,
  situation,
  setSituation,
  filteredTodos,
  setFilteredTodos,
}) {
  const markCompleted = () => {
    // check todo completed field
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      })
    );
    // check all todo completed field value is true
    if (todos.every((item) => item.completed)) {
      setTodos(
        todos.map((todo) => {
          return {
            ...todo,
            completed: false,
          };
        })
      );
    }
  };
  return (
    <div className="main">
      <input type="checkbox" className="toggle-all" />
      <label onClick={markCompleted} htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            text={todo.todo}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
      <>
        <MainFooter
          todos={todos}
          setTodos={setTodos}
          situation={situation}
          setSituation={setSituation}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
      </>
    </div>
  );
}

export default Main;
