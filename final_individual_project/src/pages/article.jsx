import React from 'react'
import styles from '../css/article.module.scss'
import classNames from 'classnames'
import { MyButton } from 'components/button/button'
import { Reviews } from 'modal/reviews'

export const Article = ({ myArticle }) => {
  return (
    <>
      <div className={classNames(styles.main__artic, styles.artic)}>
        <div className={classNames(styles.artic__content, styles.article)}>
          <div className={styles.article__left}>
            <div className={styles.article__fillImg}>
              <div className={styles.article__img}>
                <img src="" alt="" />
              </div>
              <div className={styles.article__imgBar}>
                <div className={styles.article__imgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={styles.article__imgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={styles.article__imgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={styles.article__imgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={styles.article__imgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={styles.article__imgBarDiv}>
                  <img src="" alt="" />
                </div>
              </div>
              <div
                className={classNames(
                  styles.article__imgBarMob,
                  styles.imgBarMob,
                )}
              >
                <div
                  className={classNames(
                    styles.imgBarMob__circle,
                    styles.circleActive,
                  )}
                />
                <div className={styles.imgBarMob__circle} />
                <div className={styles.imgBarMob__circle} />
                <div className={styles.imgBarMob__circle} />
                <div className={styles.imgBarMob__circle} />
              </div>
            </div>
          </div>
          <div className={styles.article__right}>
            <div className={styles.article__block}>
              <h3 className={classNames(styles.article__title, styles.title)}>
                Ракетка для большого тенниса Triumph Pro STС Б/У
              </h3>
              <div className={styles.article__info}>
                <p className={styles.article__date}>Сегодня в 10:45</p>
                <p className={styles.article__city}>Санкт-Петербург</p>
                <a
                  className={styles.article__link}
                  href=""
                  target="_blank"
                  rel=""
                >
                  23 отзыва
                </a>
              </div>
              <p className={styles.article__price}>2 200 ₽</p>
              <div className={styles.article__btnBlock}>
                {!myArticle ? (
                  <button
                    className={classNames(styles.article__btn, styles.btnHov02)}
                  >
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </button>
                ) : (
                  <>
                    <MyButton name={'Редактировать'} />
                    <MyButton name={'Снять с публикации'} />
                  </>
                )}
              </div>

              <div
                className={classNames(styles.article__author, styles.author)}
              >
                <div className={styles.author__img}>
                  <img src="" alt="" />
                </div>
                <div className={styles.author__cont}>
                  <p className={styles.author__name}>Кирилл</p>
                  <p className={styles.author__about}>
                    Продает товары с августа 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Reviews />
        </div>
      </div>
      <div className={styles.main__container}>
        <h3 className={classNames(styles.main__title, styles.title)}>
          Описание товара
        </h3>
        <div className={styles.main__content}>
          <p className={styles.main__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  )
}
