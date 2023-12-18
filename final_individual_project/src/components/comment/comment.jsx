import React from 'react'
import styles from './comment.module.scss'
import classNames from 'classnames'

export const Comment = ({ name, date, comment }) => {
  return (
    <div className={classNames(styles.reviews__review, styles.review)}>
      <div className={styles.review__item}>
        <div className={styles.review__left}>
          <div className={styles.review__img}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.review__right}>
          <p className={classNames(styles.review__name, styles.fontT)}>
            {name} <span>{date}</span>
          </p>
          <h5 className={classNames(styles.review__title, styles.fontT)}>
            Комментарий
          </h5>
          <p className={classNames(styles.review__text, styles.fontT)}>
            {comment}
          </p>
        </div>
      </div>
    </div>
  )
}
