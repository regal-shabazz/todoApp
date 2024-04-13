import React, { useEffect } from 'react'
import InputSection from './InputSection'
import DisplaySection from './DisplaySection'

function Main() {
  const sectionContainerStyle = {
    paddingBlock: "20px",
  }

  const [todos, setTodos] = React.useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(!storedTodos) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <main>
      <InputSection sectionContainerStyle={sectionContainerStyle} todos={todos} setTodos={setTodos}/>
      <hr/>
      <DisplaySection sectionContainerStyle={sectionContainerStyle} todos={todos} setTodos={setTodos}/>
    </main>
  )
}

export default Main