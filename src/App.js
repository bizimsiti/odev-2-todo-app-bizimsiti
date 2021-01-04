import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Learn Javascript", completed: false },
    { id: 2, todo: "Learn React", completed: false },
    { id: 3, todo: "Have a life", completed: false },
  ]);
  const [todo, setTodo] = useState("initialState");
  const [situation, setSituation] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const filterHandler = () => {
    switch (situation) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  useEffect(() => {
    setTodo("");
    filterHandler();
  }, [todos, situation]);
  return (
    <>
      <div className="todoapp">
        <Header
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          setTodo={setTodo}
        />
        <Main
          todos={todos}
          setTodos={setTodos}
          situation={situation}
          setSituation={setSituation}
          filteredTodos={filteredTodos}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
