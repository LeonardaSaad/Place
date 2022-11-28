import { useState } from 'react'

import styles from "../styles/Todo.module.css"

import FormTask from '../Components/FormTask'
import TodoItem from '../Components/TodoItem'




const Todo = () => {
  return (
    <div>
      <h1>To do</h1>
      <p>Checklist, com data e icone</p>


      <FormTask />
      <TodoItem />


    </div >
  )
}

export default Todo