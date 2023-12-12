import React from 'react'
import styles from '../css/main.module.scss'
import { Card } from 'components/card/card'
import classNames from 'classnames'

export const MainPage = () => {
  return (
    <div className={styles.main__container}>
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
    </div>
  )
}
