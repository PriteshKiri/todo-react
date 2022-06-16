import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todolist">
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              todo={todo}
              key={todo.id}
              filteredTodos={filteredTodos}
              className="todolist"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
