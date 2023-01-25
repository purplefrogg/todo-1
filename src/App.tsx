import React from 'react'
import style from './app.module.css'
import { TodoAdd } from './todoAdd/todoAdd'
import { TodoList } from './todoList/todoList'

function App() {
  return (
    <div className={style.App}>
      <div className={style.content}>
        <h1 className={style.title}>My Todos</h1>
        <TodoAdd />
        <TodoList />
      </div>
    </div>
  )
}

export default App
