import { React, useState, useEffect } from 'react'
import styles from '../css/profile.module.scss'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Skeleton from 'react-loading-skeleton'
import { setCurrentPage, setCurrentModal } from 'store/slices/modalsSlice'
import { useDispatch } from 'react-redux'
import { Card } from 'components/card/card'
import { MyButton } from 'components/buttons/button'
import {
  useGetArticlesByUserIdQuery,
  useGetCredentialsQuery,
  useChangeCredentialsMutation,
} from 'services/appService'

export const Profile = ({ myProfile }) => {
  const dispatch = useDispatch()
  const params = myProfile ? null : useParams()
  const [credChanges, setCredChanges] = useState({})
  const [phoneVisibility, setPhoneVisibility] = useState(false)
  const { data: credentials } = myProfile
    ? useGetCredentialsQuery()
    : { data: null }
  const { data, isLoading } = useGetArticlesByUserIdQuery(
    myProfile ? credentials?.id : Number(params?.id),
  )
  const user = data ? data[0]?.user : null
  const [changeCredentials, newCred] = useChangeCredentialsMutation()
  useEffect(() => {
    if (newCred.isSuccess) {
      setCredChanges({})
    }
  }, [newCred])

  useEffect(() => {
    dispatch(setCurrentPage(myProfile ? 'myProfile' : 'Profile'))
  }, [])
  // console.log(newCred)

  const inputHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setCredChanges({ ...credChanges, name: e.target.value })
        break
      case 'last-name':
        setCredChanges({ ...credChanges, surname: e.target.value })
        break
      case 'city':
        setCredChanges({ ...credChanges, city: e.target.value })
        break
      case 'phone':
        setCredChanges({ ...credChanges, phone: e.target.value })
        break
      default:
        break
    }
  }

  return (
    <div className={styles.main__container}>
      <div className={styles.main__centerBlock}>
        <h2 className={styles.main__h2}>
          {myProfile
            ? `Здравствуйте, ${credentials?.name}!`
            : 'Профиль продавца'}
        </h2>
        <div className={classNames(styles.main__profile, styles.profile)}>
          <div className={styles.profile__content}>
            {myProfile && (
              <h3 className={classNames(styles.profile__title, styles.title)}>
                Настройки профиля
              </h3>
            )}
            <div
              className={
                myProfile ? styles.profile__settings : styles.profile__seller
              }
            >
              <div className={styles.settings__left}>
                {isLoading ? (
                  <Skeleton width={170} height={170} circle />
                ) : (
                  <div
                    className={styles.settings__img}
                    style={{
                      backgroundImage: `url("http://localhost:8090/${
                        myProfile ? credentials?.avatar : user.avatar
                      }")`,
                    }}
                  />
                )}
                {myProfile && (
                  <p
                    className={styles.settings__changePhoto}
                    onClick={() => {
                      dispatch(setCurrentModal('uploadImage'))
                    }}
                  >
                    {credentials?.avatar ? 'Заменить' : 'Загрузите фото'}
                  </p>
                )}
              </div>
              {myProfile ? (
                <div className={styles.settings__right}>
                  <form className={styles.settings__form} action="#">
                    <div className={styles.settings__div}>
                      <label htmlFor="fname">Имя</label>
                      <input
                        className={styles.settings__fName}
                        // id="settings-fname"
                        name="name"
                        type="text"
                        onChange={(e) => {
                          inputHandler(e)
                        }}
                        defaultValue={credentials?.name}
                      />
                      {'name' in credChanges && newCred.isLoading && (
                        <div className={styles.settings__loader}>
                          <Skeleton height={40} />
                        </div>
                      )}
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="lname">Фамилия</label>
                      <input
                        className={styles.settings__lName}
                        name="last-name"
                        onChange={(e) => {
                          inputHandler(e)
                        }}
                        type="text"
                        defaultValue={credentials?.surname}
                      />
                      {'surname' in credChanges && newCred.isLoading && (
                        <div className={styles.settings__loader}>
                          <Skeleton height={40} />
                        </div>
                      )}
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="city">Город</label>
                      <input
                        className={styles.settings__city}
                        onChange={(e) => {
                          inputHandler(e)
                        }}
                        name="city"
                        type="text"
                        defaultValue={credentials?.city}
                        placeholder=""
                      />
                      {'city' in credChanges && newCred.isLoading && (
                        <div className={styles.settings__loader}>
                          <Skeleton height={40} />
                        </div>
                      )}
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="phone">Телефон</label>
                      <input
                        className={styles.settings__phone}
                        id="settings-phone"
                        name="phone"
                        onChange={(e) => {
                          inputHandler(e)
                        }}
                        type="tel"
                        defaultValue={credentials?.phone}
                        placeholder={'Введите номер телефона'}
                      />
                      {'phone' in credChanges && newCred.isLoading && (
                        <div className={styles.settings__loader}>
                          <Skeleton height={40} />
                        </div>
                      )}
                    </div>
                    <div className={styles.settings__btn}>
                      <MyButton
                        name="Сохранить"
                        action={() => {
                          changeCredentials(credChanges)
                        }}
                        disable={
                          Object.keys(credChanges).length === 0 ||
                          newCred.isLoading
                        }
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <div className={styles.seller__right}>
                    <h3 className={styles.seller__title}>
                      {isLoading ? <Skeleton /> : user?.name}
                    </h3>
                    <p className={styles.seller__city}>
                      {isLoading ? <Skeleton /> : user?.city}
                    </p>
                    <p className={styles.seller__inf}>
                      {user ? (
                        `Продает товары с ${format(
                          new Date(user?.sells_from),
                          'MMMM yyyy',
                          {
                            locale: ru,
                          },
                        )}`
                      ) : (
                        <Skeleton />
                      )}
                    </p>
                  </div>
                  <MyButton
                    name={`${phoneVisibility ? 'Скрыть' : 'Показать'} ${
                      user?.phone ? 'телефон' : 'e-mail'
                    }`}
                    phone={user?.phone}
                    email={user?.phone ? null : user?.email}
                    phoneVisibility={phoneVisibility}
                    action={() => {
                      setPhoneVisibility(!phoneVisibility)
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className={classNames(styles.main__title, styles.title)}>
        {myProfile && data?.length > 0
          ? 'Мои товары'
          : myProfile && data?.length === 0
            ? 'У вас пока нет товаров для продажи'
            : 'Товары продавца'}
      </h3>
      <div className={styles.main__content}>
        {data?.length > 0 && (
          <ul className={classNames(styles.content__cards, styles.cards)}>
            {data.map((art) => (
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
        )}
      </div>
    </div>
  )
}
