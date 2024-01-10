import React from 'react'
import styles from './comment.module.scss'
import classNames from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const Comment = ({ name, date, comment, img }) => (
  <div className={classNames(styles.reviews__review, styles.review)}>
    <div className={styles.review__item}>
      <div className={styles.review__left}>
        <div
          className={styles.review__img}
          style={{
            backgroundImage: `url("http://localhost:8090/${img}")`,
          }}
        />
      </div>
      <div className={styles.review__right}>
        <p className={classNames(styles.review__name, styles.fontT)}>
          {name}{' '}
          <span>
            {format(new Date(date), 'dd MMMM yyyy', {
              locale: ru,
            })}
          </span>
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
