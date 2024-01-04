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
} from 'services/appService'

export const Profile = ({ auth }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const [myProfile] = useState(auth)
  const { data: credentials } = useGetCredentialsQuery()
  console.log(credentials)
  const { data, isLoading } = useGetArticlesByUserIdQuery(
    myProfile && credentials ? credentials?.id : Number(params.id),
  )
  const [phoneVisibility, setPhoneVisibility] = useState(false)
  console.log(data)
  useEffect(() => {
    dispatch(setCurrentPage(myProfile ? 'myProfile' : 'Profile'))
  }, [])

  // useEffect(() => {
  //   if (Number(params.id) === 2) {
  //     setMyProfile(true)
  //   }
  // }, [params])
  const user = data ? data[0]?.user : null
  console.log(myProfile)

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
                        name="fname"
                        type="text"
                        defaultValue={credentials?.name}
                        placeholder=""
                      />
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="lname">Фамилия</label>
                      <input
                        className={styles.settings__lName}
                        // id="settings-lname"
                        name="lname"
                        type="text"
                        defaultValue={credentials?.surname}
                        placeholder=""
                      />
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="city">Город</label>
                      <input
                        className={styles.settings__city}
                        // id="settings-city"
                        name="city"
                        type="text"
                        defaultValue={credentials?.city}
                        placeholder=""
                      />
                    </div>
                    <div className={styles.settings__div}>
                      <label htmlFor="phone">Телефон</label>
                      <input
                        className={styles.settings__phone}
                        id="settings-phone"
                        name="phone"
                        type="tel"
                        defaultValue={credentials?.phone}
                        placeholder={'Введите номер телефона'}
                      />
                    </div>
                    <div className={styles.settings__btn}>
                      <MyButton name="Сохранить" />
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
            {data.map((art) => {
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
        )}
      </div>
    </div>
  )
}
