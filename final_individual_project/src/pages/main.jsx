import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from 'store/slices/modalsSlice'
import styles from '../css/main.module.scss'
import { Card } from 'components/card/card'
import classNames from 'classnames'

export const MainPage = () => {
  const data = useSelector((state) => state.modals.displayArticles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPage('Main'))
  }, [])

  return (
    <div className={styles.main__container}>
      <h2 className={styles.main__h2}>Объявления</h2>
      <div className={styles.main__content}>
        <ul className={classNames(styles.content__cards, styles.cards)}>
          {data &&
            data.map((art) => (
              <Card
                key={art.id}
                id={art.id}
                title={art.title}
                created={art.created_on}
                price={art.price}
                city={art.user.city}
                img={art?.images[0]?.url}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}
