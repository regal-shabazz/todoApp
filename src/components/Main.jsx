import React from 'react'
import InputSection from './InputSection'
import DisplaySection from './DisplaySection'

function Main() {
  const sectionContainerStyle = {
    paddingBlock: "20px",
  }

  const [todos, setTodos] = React.useState([])

  return (
    <main>
      <InputSection sectionContainerStyle={sectionContainerStyle} todos={todos} setTodos={setTodos}/>
      <hr/>
      <DisplaySection sectionContainerStyle={sectionContainerStyle} todos={todos} setTodos={setTodos}/>
    </main>
  )
}

export default Main