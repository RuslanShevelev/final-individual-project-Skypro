import React from 'react'
import styles from '../css/main.module.scss'
import { Card } from 'components/card/card'
import classNames from 'classnames'
import { useFetchAllArticlesQuery } from 'services/appService'

export const MainPage = () => {
  const {
    data,
    //  error,
    //   isLoading
  } = useFetchAllArticlesQuery()
  console.log(data)
  return (
    <div className={styles.main__container}>
      <h2 className={styles.main__h2}>Объявления</h2>
      <div className={styles.main__content}>
        <ul className={classNames(styles.content__cards, styles.cards)}>
          {data &&
            data.map((art) => {
              return (
                <Card
                  key={art.id}
                  id={art.id}
                  title={art.title}
                  created={art.created_on}
                  price={art.price}
                  city={art.user.city}
                  img={art?.images[0]?.url}
                />
              )
            })}
        </ul>
      </div>
    </div>
  )
}
