import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id} className="todo-list-item">
          <span style={{ overflow: "hidden" }}>{todo.todoString}</span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => markComplete(todo.id)}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
