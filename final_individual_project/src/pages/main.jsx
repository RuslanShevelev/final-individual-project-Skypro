import { React, useState } from 'react'
// import classNames from 'classnames'
import styles from '../css/main.module.scss'
// import logo from '../img/logo.png'
// import logoMobile from '../img/logo-mob.png'
import icon01 from '../img/icon_01.png'
import icon02 from '../img/icon_02.png'
import icon03 from '../img/icon_03.png'
// import { Card } from 'components/card/card'
import { Profile } from './profile'
import { MyButton } from 'components/button/button'
import { Header } from 'components/header/header'
import classNames from 'classnames'

// console.log(styles)

export const MainPage = () => {
  const [page, setPage] = useState('Main')
  console.log(page)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        {/* <header className={styles.header}>
        <nav className={styles.header__nav}>
          <button
            className={classNames(styles.header__btnMainEnter, styles.btnHov01)}
            id="btnMainEnter"
          >
            Вход в личный кабинет
          </button>
        </nav>
      </header> */}
        <main
        // className={styles.main}
        >
          <div className={styles.main__search}>
            <a className={styles.search__logoLink} href="#" target="_blank">
              <div className={styles.search__logo_img} />
            </a>
            {/* <a className={styles.search__logoMobLink} href="#" target="_blank">
              <img
                className={styles.search__logo_mob_img}
                src={logoMobile}
                alt="logo"
              />
            </a> */}
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
          <Profile />
          {/* <div className={styles.main__container}>
          <h2 className={styles.main__h2}>Объявления</h2>
          <div className={styles.main__content}>
            <div className={classNames(styles.content__cards, styles.cards)}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div> */}
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
