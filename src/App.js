import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import Todos from "./component/Todos";
import TodoFrom from "./component/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({
      localStorage,
    });
    if (localStorage) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 > Todo With Local Storage </h1>{" "}
      <Todos todos={todos} markComplete={markComplete} />{" "}
      <TodoFrom addTodos={addTodos} />{" "}
    </Container>
  );
};
export default App;
