import React from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.scss'
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <h1>Header</h1>
        <nav>
          <Link to='/'>todo</Link>
          <Link to='/profile'>profile</Link>
          <Link to='/password'>password</Link>
        </nav>
      </div>
    </header>
  )
}
