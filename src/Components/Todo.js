import React from "react";

const Todo = ({ text, todos, todo, setTodos, filteredTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todoo">
      <li className={`${todo.completed ? "completed todowidth" : "todowidth"}`}>
        {text}
      </li>
      <button onClick={completedHandler} className="check todowidth">
        check
      </button>
      <button onClick={deleteHandler} className="delete todowidth">
        Delete
      </button>
    </div>
  );
};

export default Todo;
