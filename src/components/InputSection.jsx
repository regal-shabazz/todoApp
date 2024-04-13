import React from "react";

function InputSection({sectionContainerStyle, todos, setTodos}) {
  const inputFieldSection = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const [inputText, setInputText] = React.useState("")

  function handleTextInput(e) {
    setInputText(e.target.value)
  }

  function handleAddTaskBtn(e) {
    e.preventDefault()
    setTodos(prevTodos => [...prevTodos, inputText])
    setInputText("")
  }

  return (
    <section className="input-section">
      <div className="container" style={sectionContainerStyle}>
        <form>
          <div className="input-field-section" style={inputFieldSection}>
            <input
              type="text"
              placeholder="Add Task"
              className="task-input-field"
              onChange={handleTextInput}
              value={inputText}
            />
            <button className="add-task-btn" type="submit" onClick={handleAddTaskBtn}>Add Task</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InputSection;
