import React, { useState, useEffect } from "react";
import "./App.css";
//Importing components
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/ToDoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [status, todos]);

  const filterHandler = () => {
    switch (status) {
      case "Complete":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Incomplete":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App-main">
      <div className="main-card">
        <Header />
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default App;
