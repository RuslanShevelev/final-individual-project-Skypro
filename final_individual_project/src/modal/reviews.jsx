import React from 'react'
import styles from '../css/reviews.module.scss'
import classNames from 'classnames'
import { Comment } from 'components/comment/comment'

export const Reviews = () => {
  return (
    <div className={styles.containerBg}>
      <div className={styles.modal__block}>
        <div className={styles.modal__content}>
          <h3 className={styles.modal__title}>Отзывы о товаре</h3>
          <div className={styles.modal__btnClose}>
            <div className={styles.modal__btnCloseLine} />
          </div>
          <div className={styles.modal}>
            <form
              className={classNames(
                styles.modal__formNewArt,
                styles.formNewArt,
              )}
              id="formNewArt"
              action="#"
            >
              <div className={styles.formNewArt__block}>
                <label htmlFor="text">Добавить отзыв</label>
                <textarea
                  className={styles.formNewArt__area}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows={5}
                  placeholder="Введите описание"
                  defaultValue={''}
                />
              </div>
              <button
                className={classNames(
                  styles.formNewArt__btnPub,
                  styles.btnHov02,
                )}
                id="btnPublish"
              >
                Опубликовать
              </button>
            </form>
            <div
              className={classNames(
                styles.modal__reviews,
                styles.modal__scroll,
              )}
            >
              <Comment
                name={'Олег'}
                date={'14 августа'}
                comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
              />
              <Comment
                name={'Олег'}
                date={'14 августа'}
                comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
              />
              <Comment
                name={'Олег'}
                date={'14 августа'}
                comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
              />
              <Comment
                name={'Олег'}
                date={'14 августа'}
                comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
              />
              <Comment
                name={'Олег'}
                date={'14 августа'}
                comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
              />
              <Comment
                name={'Олег'}
                date={'14 августа'}
                comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
