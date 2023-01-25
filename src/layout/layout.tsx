import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/header'
import style from './layout.module.scss'
export const Layout: FC<any> = ({}) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  )
}
