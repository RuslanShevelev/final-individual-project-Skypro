import { React, useState } from 'react'
import styles from './header.module.scss'
import classNames from 'classnames'

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        {isAuth && (
          <button
            className={classNames(styles.header__btnMainEnter, styles.btnHov01)}
            id="btputAd"
          >
            Разместить объявление
          </button>
        )}

        <button
          className={classNames(styles.header__btnMainEnter, styles.btnHov01)}
          id="btnMainEnter"
          onClick={() => {
            setIsAuth(!isAuth)
          }}
        >
          {isAuth ? 'Л' : 'Вход в л'}ичный кабинет
        </button>
      </nav>
    </header>
  )
}
