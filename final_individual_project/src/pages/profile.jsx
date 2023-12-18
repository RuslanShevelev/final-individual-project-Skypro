import React from 'react'
import styles from '../css/profile.module.scss'
import classNames from 'classnames'
import { Card } from 'components/card/card'
import { MyButton } from 'components/button/button'

export const Profile = ({ myProfile }) => {
  return (
    <div className={styles.main__container}>
      <div className={styles.main__centerBlock}>
        <h2 className={styles.main__h2}>
          {myProfile ? 'Здравствуйте, Антон!' : 'Профиль продавца'}
        </h2>
        <div className={classNames(styles.main__profile, styles.profile)}>
          <div className={styles.profile__content}>
            {myProfile && (
              <h3 className={classNames(styles.profile__title, styles.title)}>
                Настройки профиля
              </h3>
            )}
            <div
              className={
                myProfile ? styles.profile__settings : styles.profile__seller
              }
            >
              <div className={styles.settings__left}>
                <div className={styles.settings__img}>
                  <a href="" target="_self">
                    <img src="#" alt="" />
                  </a>
                </div>
                {myProfile && (
                  <a
                    className={styles.settings__changePhoto}
                    href=""
                    target="_self"
                  >
                    Заменить
                  </a>
                )}
              </div>
              {myProfile ? (
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
                    <div className={styles.settings__btn}>
                      <MyButton name="Сохранить" />
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <div className={styles.seller__right}>
                    <h3 className={styles.seller__title}>Кирилл Матвеев</h3>
                    <p className={styles.seller__city}>Санкт-Петербург</p>
                    <p className={styles.seller__inf}>
                      Продает товары с августа 2021
                    </p>
                  </div>
                  <button className={styles.seller__btn}>
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className={classNames(styles.main__title, styles.title)}>
        Мои товары
      </h3>
      <div className={styles.main__content}>
        <div className={classNames(styles.content__cards, styles.cards)}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
