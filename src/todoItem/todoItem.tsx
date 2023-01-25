import React from 'react'
import { ITodo, todoStore } from '../store'
import style from './todoItem.module.css'
import { observer } from 'mobx-react-lite'

interface TodoItemProps {
  todo: ITodo
}
export const TodoItem = observer((props: TodoItemProps) => {
  const { complete, deleteItem } = todoStore
  const { todo } = props
  return (
    <div className={style.todoItem}>
      <div className={style.info}>
        <h2 className={style.name}>{todo.name}</h2>
        <p className={style.description}>{todo.description}</p>
      </div>
      <div className={style.control}>
        <input
          className={style.completed}
          onChange={() => complete(todo.id)}
          type='checkbox'
          defaultChecked={todo.completed}
        />
        <button onClick={() => deleteItem(todo.id)} className={style.delete}>
          delete
        </button>
      </div>
    </div>
  )
})
