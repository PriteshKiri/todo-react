import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitBtnHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="todo">
      <input
        type="text"
        className="todoinput"
        placeholder=" enter your to do item"
        onChange={inputTextHandler}
        value={inputText}
        required
      />
      <button
        className="Add-button"
        onClick={submitBtnHandler}
        disabled={!inputText.length}
      >
        Add
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
