function Header(props) {
  const handleTodos = (e) => {
    // enter button click handling
    if (e.key === "Enter") {
      if (props.todo) {
        props.setTodos((prev) => [
          ...prev,
          { id: Math.random() * 1000, todo: props.todo, completed: false },
        ]);
      }
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
        onKeyPress={handleTodos}
      />
    </header>
  );
}

export default Header;
