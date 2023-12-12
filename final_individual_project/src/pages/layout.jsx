import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../css/layout.module.scss'
import icon01 from '../img/icon_01.png'
import icon02 from '../img/icon_02.png'
import icon03 from '../img/icon_03.png'
import { MyButton } from 'components/button/button'
import { Header } from 'components/header/header'
import { SignIn } from 'modal/signin'
import classNames from 'classnames'

export const Layout = () => {
  const [page, setPage] = useState('Main')
  const [modal] = useState(true)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.main__search}>
            <a className={styles.search__logoLink} href="#" target="_blank">
              <div className={styles.search__logo_img} />
            </a>
            <form className={styles.search__form} action="#">
              {page === 'Main' && (
                <input
                  className={styles.search__text}
                  type="search"
                  placeholder="Поиск по объявлениям"
                  name="search"
                />
              )}
              <MyButton
                className={classNames(styles.search__btn)}
                name={page === 'Main' ? 'Найти' : 'Вернуться на главную'}
                action={() => {
                  setPage('Profile')
                }}
                hideable
              />
            </form>
          </div>
          <Outlet />
          {modal && <SignIn />}
        </main>
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src={icon01} alt="home" />
              </a>
            </div>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src={icon02} alt="home" />
              </a>
            </div>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src={icon03} alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
