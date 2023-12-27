import React from 'react'
import styles from './card.module.scss'
import classNames from 'classnames'
import { formatRelative } from 'date-fns'
import { ru } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentArt } from 'store/slices/modalsSlice'

export const Card = ({ id, img, title, price, city, created }) => {
  const dispatch = useDispatch()
  return (
    <li className={styles.cards__item}>
      <div className={classNames(styles.cards__card, styles.card)}>
        <div className={styles.card__image}>
          <NavLink to={`/article/${id}`}>
            <img
              src={`http://localhost:8090/${img}`}
              alt={title}
              onClick={() => {
                return dispatch(setCurrentArt(id))
              }}
            />
          </NavLink>
        </div>
        <div className={styles.card__content}>
          <NavLink to={`/article/${id}`}>
            <h3
              className={styles.card__title}
              onClick={() => {
                return dispatch(setCurrentArt(id))
              }}
            >
              {title}
            </h3>
          </NavLink>
          <p className={styles.card__price}>
            {new Intl.NumberFormat('ru', {
              style: 'currency',
              minimumFractionDigits: 0,
              currency: 'RUB',
            }).format(price)}
          </p>
          <p className={styles.card__place}>{city}</p>
          <p className={styles.card__date}>
            {formatRelative(created, new Date(), {
              locale: ru,
            })}
          </p>
        </div>
      </div>
    </li>
  )
}
