import React from "react";

function DisplaySection({ sectionContainerStyle, todos, setTodos }) {
  function handleDeleteTodo(index) {
    setTodos((prevTodos) => {
      return prevTodos.filter((_, todo) => todo !== index);
    });
  }

  const todoElements = todos.map((todo, index) => {
    return (
      <li key={index + 1} className="task">
        <p>{todo}</p>{" "}
        <button
          onClick={() => handleDeleteTodo(index)}
          className="delete-task-btn"
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <section className="display-section">
      <div className="container" style={sectionContainerStyle}>
        <div className="tasks-container">
          {todoElements.length < 1 ? (
            <p><i>No tasks yet</i></p>
          ) : (
            <ul className="tasks">{todoElements}</ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default DisplaySection;
