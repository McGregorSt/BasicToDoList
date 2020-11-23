import React, {useState} from 'react'

import './App.css';
import ListToDos from './components/ListToDos/ListToDos';
import NewToDo from './components/NewToDo/NewToDo';

function App() {

  const [todoName, setTodoName] = useState('')
  const [todoDesc, setTodoDesc] = useState('')
  const [toDo, setToDo] = useState([])
  // const [todos, setTodos] = useState([])

  const onBtnClickHandler = () => {
    console.log('btnClick', todoName, todoDesc)
    setToDo([...toDo, {todoName, todoDesc}])
    console.log('toDo ', toDo)

  }
  
  const onNameChange = (e) => {
    setTodoName(e.target.value)
  }
  
  const onDescChange = (e) => {
    setTodoDesc(e.target.value)
  }

  return (
    <div className="App">
      App and dance
      <NewToDo 
        name={onNameChange}
        desc={onDescChange}
        btnClicked={() => onBtnClickHandler()}
      />
      <ListToDos 
        toDos={toDo}
        name={todoName} 
        desc={todoDesc}
      />
    </div>
  )
}

export default App;
