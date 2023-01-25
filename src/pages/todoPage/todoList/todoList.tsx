import React from 'react'
import { useState } from 'react'
import style from './todoList.module.scss'
import { observer } from 'mobx-react-lite'
import { mapTodos } from './utils'
import { todoStore } from '../../../store'

export const TodoList = observer(() => {
  const { todos } = todoStore

  const [filter, setFilter] = useState('all')
  return (
    <div className={style.todoList}>
      <div className={style.filter}>
        <div className={style.buttons}>
          <button onClick={() => setFilter('completed')}>only completed</button>
          <button onClick={() => setFilter('uncompleted')}>
            not completed
          </button>
          <button onClick={() => setFilter('all')}>all</button>
        </div>
        {filter}
      </div>

      {filter === 'completed' && mapTodos(todos.filter(todo => todo.completed))}
      {filter === 'uncompleted' &&
        mapTodos(todos.filter(todo => !todo.completed))}
      {filter === 'all' && mapTodos(todos)}
    </div>
  )
})
