import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [situation, setSituation] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getFromlocal();
  }, []);
  useEffect(() => {
    const saveTolocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    const filteredHandler = () => {
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
    filteredHandler();
    saveTolocal();
    setTodo("");
  }, [todos, situation]);

  // (SAVE and LOAD) LOCALSTORAGE
  const getFromlocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
      console.log(localTodos);
    }
  };

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
          setFilteredTodos={setFilteredTodos}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
