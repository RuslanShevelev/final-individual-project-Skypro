import React from 'react'
import styles from '../css/profile.module.scss'
import classNames from 'classnames'
import { Card } from 'components/card/card'
import { MyButton } from 'components/button/button'

export const Profile = () => {
  const log = 'log'
  console.log(log)

  return (
    <main className="main">
      <div className={styles.main__container}>
        <div className={styles.main__centerBlock}>
          {/* <div className="main__menu menu">
        <a className="menu__logo-link" href="" target="_blank">
          <img className="menu__logo-img" src="img/logo.png" alt="logo" />
        </a>
        <form className="menu__form" action="#">
          <button className="menu__btn btn-hov02" id="btnGoBack">
            Вернуться на&nbsp;главную
          </button>
        </form>
      </div> */}
          <h2 className={styles.main__h2}>Здравствуйте, Антон!</h2>
          <div className={classNames(styles.main__profile, styles.profile)}>
            <div className={styles.profile__content}>
              <h3 className={classNames(styles.profile__title, styles.title)}>
                Настройки профиля
              </h3>
              <div
                className={classNames(
                  styles.profile__settings,
                  styles.settings,
                )}
              >
                <div className={styles.settings__left}>
                  <div className={styles.settings__img}>
                    <a href="" target="_self">
                      <img src="#" alt="" />
                    </a>
                  </div>
                  <a
                    className={styles.settings__changePhoto}
                    href=""
                    target="_self"
                  >
                    Заменить
                  </a>
                </div>
                <div className={styles.settings__right}>
                  <form className={styles.settings__form} action="#">
                    <div className={styles.settings__div}>
                      <label htmlFor="fname">Имя</label>
                      <input
                        className={styles.settings__fName}
                        id="settings-fname"
                        name="fname"
                        type="text"
                        defaultValue="Антон"
                        placeholder=""
                      />
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="lname">Фамилия</label>
                      <input
                        className={styles.settings__lName}
                        id="settings-lname"
                        name="lname"
                        type="text"
                        defaultValue="Городецкий"
                        placeholder=""
                      />
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="city">Город</label>
                      <input
                        className={styles.settings__city}
                        id="settings-city"
                        name="city"
                        type="text"
                        defaultValue="Санкт-Петербург"
                        placeholder=""
                      />
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="phone">Телефон</label>
                      <input
                        className={styles.settings__phone}
                        id="settings-phone"
                        name="phone"
                        type="tel"
                        defaultValue={89161234567}
                        placeholder={+79161234567}
                      />
                    </div>
                    <MyButton name="Сохранить" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <h3 className={classNames(styles.main__title, styles.title)}>
            Мои товары
          </h3>
        </div>
        <div className={styles.main__content}>
          <div className={classNames(styles.content__cards, styles.cards)}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <div className="cards__item">
          <div className="cards__card card">
            <div className="card__image">
              <a href="" target="_blank">
                <img src="#" alt="picture" />
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">
                  Ракетка для большого тенниса Triumph Pro ST
                </h3>
              </a>
              <p className="card__price">2&nbsp;200&nbsp;₽</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__card card">
            <div className="card__image">
              <a href="" target="_blank">
                <img src="#" alt="picture" />
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">
                  Ракетка для большого тенниса Triumph Pro ST
                </h3>
              </a>
              <p className="card__price">2&nbsp;200&nbsp;₽</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__card card">
            <div className="card__image">
              <a href="" target="_blank">
                <img src="#" alt="picture" />
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">
                  Ракетка для большого тенниса Triumph Pro ST
                </h3>
              </a>
              <p className="card__price">2&nbsp;200&nbsp;₽</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__card card">
            <div className="card__image">
              <a href="" target="_blank">
                <img src="#" alt="picture" />
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">
                  Ракетка для большого тенниса Triumph Pro ST
                </h3>
              </a>
              <p className="card__price">2&nbsp;200&nbsp;₽</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__card card">
            <div className="card__image">
              <a href="" target="_blank">
                <img src="#" alt="picture" />
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">
                  Ракетка для большого тенниса Triumph Pro ST
                </h3>
              </a>
              <p className="card__price">2&nbsp;200&nbsp;₽</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__card card">
            <div className="card__image">
              <a href="" target="_blank">
                <img src="#" alt="picture" />
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">
                  Ракетка для большого тенниса Triumph Pro ST
                </h3>
              </a>
              <p className="card__price">2&nbsp;200&nbsp;₽</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}
