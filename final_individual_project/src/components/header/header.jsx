import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './header.module.scss'
import classNames from 'classnames'
import { setCurrentModal } from 'store/slices/modalsSlice'

export const Header = () => {
  const [isAuth] = useState(true)
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        {isAuth && (
          <button
            onClick={() => {
              dispatch(setCurrentModal('newArticleModal'))
            }}
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
            dispatch(setCurrentModal('authModal'))
          }}
        >
          {isAuth ? 'Л' : 'Вход в л'}ичный кабинет
        </button>
      </nav>
    </header>
  )
}
