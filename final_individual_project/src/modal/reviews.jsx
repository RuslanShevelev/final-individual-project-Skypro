import React from 'react'
import styles from '../css/reviews.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { CloseButton } from 'components/buttons/closebutton'
import { Comment } from 'components/comment/comment'

export const Reviews = ({ close }) => {
  const data = useSelector((state) => {
    return state.modals.comments
  })
  console.log(data)
  return (
    <div className={styles.containerBg}>
      <div className={styles.modal__block}>
        <div className={styles.modal__content}>
          <h3 className={styles.modal__title}>Отзывы о товаре</h3>
          <div className={styles.modal__btnClose} onClick={close}>
            <CloseButton />
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
            <ul
              className={classNames(
                styles.modal__reviews,
                styles.modal__scroll,
              )}
            >
              {data &&
                data?.map((item) => {
                  return (
                    <li key={item.id}>
                      <Comment
                        name={item?.author?.name}
                        date={item?.created_on}
                        comment={item?.text}
                        img={item?.author?.avatar}
                      />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
