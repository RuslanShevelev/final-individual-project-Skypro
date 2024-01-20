import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './header.module.scss'
import classNames from 'classnames'
import { setCurrentModal } from 'store/slices/modalsSlice'
import { useAuth } from 'hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { logout } from 'store/slices/authSlice'

export const Header = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const page = useSelector((state) => state.modals.currentPage)

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        {isAuth && page === 'myProfile' && (
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
            if (!isAuth) {
              dispatch(setCurrentModal('authModal'))
            }
            if (isAuth && page !== 'myProfile') {
              navigate(`/myProfile`, {
                replace: true,
              })
            }
            if (isAuth && page === 'myProfile') {
              dispatch(logout())
              navigate(`/`, {
                replace: true,
              })
            }
          }}
        >
          {isAuth && page === 'myProfile'
            ? 'Выйти'
            : isAuth
              ? 'Личный кабинет'
              : 'Войти в личный кабинет'}
        </button>
      </nav>
    </header>
  )
}
