import React from 'react'
import { TodoAdd } from './todoAdd/todoAdd'
import { TodoList } from './todoList/todoList'
import style from './todoPage.module.scss'

export function TodoPage() {
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
