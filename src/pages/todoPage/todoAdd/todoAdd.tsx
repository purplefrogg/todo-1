import React from 'react'
import { useState } from 'react'
import { todoStore } from '../../../store'
import style from './todoAdd.module.scss'
import { observer } from 'mobx-react-lite'

export const TodoAdd = observer(() => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        todoStore.add(name, description)

        setName('')
        setDescription('')
      }}
      className={style.TodoAdd}>
      <div className={style.inputs}>
        <label className={style.field}>
          Name
          <input
            type='text'
            required
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </label>
        <label className={style.field}>
          Description
          <input
            type='text'
            required
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
          />
        </label>
      </div>
      <button type='submit' className={style.submit}>
        Add Todo
      </button>
    </form>
  )
})
