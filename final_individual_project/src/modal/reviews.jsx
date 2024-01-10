import React, { useState } from 'react'
import styles from '../css/reviews.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { CloseButton } from 'components/buttons/closebutton'
import { Comment } from 'components/comment/comment'
import { useAuth } from 'hooks/use-auth'
import { usePostCommentMutation } from 'services/appService'

export const Reviews = ({ close }) => {
  const data = useSelector((state) => state.modals.comments)
  const artId = useSelector((state) => Number(state.modals.currentArt.id))
  const { isAuth } = useAuth()
  const [postComment, newData] = usePostCommentMutation()
  const [newComment, setNewComment] = useState({ id: artId })
  console.log(newData)
  return (
    <div className={styles.containerBg}>
      <div className={styles.modal__block}>
        <div className={styles.modal__content}>
          <h3 className={styles.modal__title}>Отзывы о товаре</h3>
          <div className={styles.modal__btnClose} onClick={close}>
            <CloseButton />
          </div>
          <div className={styles.modal}>
            {isAuth && (
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
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        body: { text: e.target.value },
                      })
                    }}
                  />
                </div>
                <button
                  className={classNames(
                    styles.formNewArt__btnPub,
                    styles.btnHov02,
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    postComment(newComment)
                  }}
                >
                  Опубликовать
                </button>
              </form>
            )}
            <ul
              className={classNames(
                styles.modal__reviews,
                styles.modal__scroll,
              )}
            >
              {data &&
                data?.map((item) => (
                  <li key={item.id}>
                    <Comment
                      name={item?.author?.name}
                      date={item?.created_on}
                      comment={item?.text}
                      img={item?.author?.avatar}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
