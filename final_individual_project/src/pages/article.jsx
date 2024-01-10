import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {
  setCurrentModal,
  setCurrentPage,
  setCurrentArt,
  setComments,
} from 'store/slices/modalsSlice'
import styles from '../css/article.module.scss'
import classNames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { formatRelative, format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { MyButton } from 'components/buttons/button'
import { useGetCommentsByIdQuery } from 'services/appService'
import noPhoto from '../img/no-image-large.png'

export const Article = ({ myArticle }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const comments = useGetCommentsByIdQuery(Number(params.id)).data
  const [phoneVisibility, setPhoneVisibility] = useState(false)
  const [activeImg, setActiveImg] = useState(null)
  const { currentArt: data, loading } = useSelector((state) => state.modals)
  useEffect(() => {
    if (!loading) {
      dispatch(setCurrentPage('Article'))
    }
    dispatch(setCurrentArt(Number(params.id)))
  }, [loading])

  useEffect(() => {
    if (data?.images[0]) {
      setActiveImg(data.images[0])
    }
    return () => {
      setActiveImg(null)
    }
  }, [data])

  useEffect(() => {
    dispatch(setComments(comments))
  }, [comments])

  const commentsNumber = (num) => {
    const string = num?.toString()
    const lastChar = string?.charAt(string.length - 1)
    let result
    if (num === 0) {
      result = 'Отзывов пока нет'
    } else if (lastChar === '1' && !(num === 11)) {
      result = num + ' отзыв'
    } else if (lastChar === '2' && !(num === 12)) {
      result = num + ' отзыва'
    } else if (lastChar === '3' && !(num === 13)) {
      result = num + ' отзыва'
    } else if (lastChar === '4' && !(num === 14)) {
      result = num + ' отзыва'
    } else {
      result = num + ' отзывов'
    }
    return result
  }

  // console.log(commentsNumber)
  return (
    <>
      <div className={classNames(styles.main__artic, styles.artic)}>
        <div className={classNames(styles.artic__content, styles.article)}>
          <div className={styles.article__left}>
            <div className={styles.article__fillImg}>
              <div className={styles.article__img}>
                {data ? (
                  <img
                    src={
                      activeImg
                        ? `http://localhost:8090/${activeImg?.url}`
                        : noPhoto
                    }
                    alt="active image"
                  />
                ) : (
                  <Skeleton width={480} height={480} />
                )}
              </div>
              <ul className={styles.article__imgBar}>
                {data
                  ? data?.images?.map((item) => (
                      <li
                        key={item.id}
                        className={
                          item.url === activeImg?.url
                            ? classNames(
                                styles.article__imgBarDiv,
                                styles.article__imgBarDiv_active,
                              )
                            : styles.article__imgBarDiv
                        }
                        onClick={() => setActiveImg(item)}
                      >
                        <img src={`http://localhost:8090/${item.url}`} alt="" />
                      </li>
                    ))
                  : Array(5)
                      .fill()
                      .map(() => (
                        <li
                          key={Math.random()}
                          className={styles.article__imgBarDiv}
                        >
                          <Skeleton width={88} height={88} />
                        </li>
                      ))}
              </ul>
              <div
                className={classNames(
                  styles.article__imgBarMob,
                  styles.imgBarMob,
                )}
              >
                <div
                  className={classNames(
                    styles.imgBarMob__circle,
                    styles.circleActive,
                  )}
                />
                <div className={styles.imgBarMob__circle} />
                <div className={styles.imgBarMob__circle} />
                <div className={styles.imgBarMob__circle} />
                <div className={styles.imgBarMob__circle} />
              </div>
            </div>
          </div>
          <div className={styles.article__right}>
            <div className={styles.article__block}>
              <h3 className={classNames(styles.article__title, styles.title)}>
                {data ? data.title : <Skeleton />}
              </h3>
              <div className={styles.article__info}>
                <p className={styles.article__date}>
                  {data ? (
                    formatRelative(data?.created_on, new Date(), {
                      locale: ru,
                    })
                  ) : (
                    <Skeleton />
                  )}
                </p>

                <p className={styles.article__city}>
                  {data ? data?.user?.city : <Skeleton />}
                </p>
                <div
                  className={styles.article__link}
                  onClick={() => {
                    // setReviews(true)
                    dispatch(setCurrentModal('reviewsModal'))
                  }}
                >
                  {comments ? commentsNumber(comments?.length) : <Skeleton />}
                </div>
              </div>
              <p className={styles.article__price}>
                {data ? (
                  new Intl.NumberFormat('ru', {
                    style: 'currency',
                    minimumFractionDigits: 0,
                    currency: 'RUB',
                  }).format(data.price)
                ) : (
                  <Skeleton />
                )}
              </p>
              <div className={styles.article__btnBlock}>
                {!myArticle ? (
                  <button
                    className={classNames(styles.article__btn, styles.btnHov02)}
                    onClick={() => {
                      setPhoneVisibility(!phoneVisibility)
                    }}
                  >
                    {phoneVisibility ? 'Скрыть' : 'Показать'}
                    {'  '}
                    {data?.user?.phone ? 'телефон' : 'e-mail'}
                    {data && (
                      <span>
                        {data?.user?.phone
                          ? data?.user?.phone
                              .replace(/\D/g, '')
                              .replace(
                                /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g,
                                `$1 $2 ${
                                  !phoneVisibility ? 'XXX XX XX' : '$3 $4 $5'
                                }`,
                              )
                          : !phoneVisibility
                            ? 'XXXXXXXXX'
                            : data.user.email}
                      </span>
                    )}
                  </button>
                ) : (
                  <>
                    <MyButton name={'Редактировать'} />
                    <MyButton name={'Снять с публикации'} />
                  </>
                )}
              </div>

              <div
                className={classNames(styles.article__author, styles.author)}
              >
                <div
                  className={styles.author__img}
                  style={{
                    backgroundImage: `url("http://localhost:8090/${data?.user?.avatar}")`,
                  }}
                >
                  {!data && <Skeleton circle width={40} height={40} />}
                </div>
                <div className={styles.author__cont}>
                  <p
                    className={styles.author__name}
                    onClick={() => {
                      navigate(`/profile/${data?.user?.id}`, {
                        replace: true,
                      })
                    }}
                  >
                    {data ? data?.user?.name : <Skeleton />}
                  </p>
                  <p className={styles.author__about}>
                    {data ? (
                      `Продает товары с ${format(
                        new Date(data?.user?.sells_from),
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
              </div>
            </div>
          </div>
          {/* {reviews && (
            <Reviews
              close={() => {
                setReviews(false)
              }}
            />
          )} */}
        </div>
      </div>
      <div className={styles.main__container}>
        <h3 className={classNames(styles.main__title, styles.title)}>
          Описание товара
        </h3>
        <div className={styles.main__content}>
          {data && <p className={styles.main__text}>{data.description}</p>}
        </div>
        {/* {newArticle && <addOrChangeArticle />} */}
      </div>
    </>
  )
}
