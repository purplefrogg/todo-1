import React from 'react'
import { ITodo } from '../store'
import { TodoItem } from '../todoItem/todoItem'
import style from './todoList.module.scss'

export const mapTodos = (todos: ITodo[]) => {
  if (!todos.length) {
    return <div className={style.empty}>No todos</div>
  }
  return todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
}
