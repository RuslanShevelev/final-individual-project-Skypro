import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findArticles, setCurrentModal } from 'store/slices/modalsSlice'
import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import styles from '../css/layout.module.scss'
import icon01 from '../img/icon_01.png'
import icon02 from '../img/icon_02.png'
import icon03 from '../img/icon_03.png'
import { MyButton } from 'components/buttons/button'
import { Header } from 'components/header/header'
import { AddOrChangeArticle } from 'components/modals/addnewarticle'
import { SignIn } from 'components/modals/signin'
import { Reviews } from 'components/modals/reviews'
import { UploadImage } from 'components/modals/upload_image'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useFetchAllArticlesQuery } from 'services/appService'
import { useAuth } from 'hooks/use-auth'

export const Layout = () => {
  useFetchAllArticlesQuery()
  const dispatch = useDispatch()
  const page = useSelector((state) => state.modals.currentPage)
  const modal = useSelector((state) => state.modals.currentModal)
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const { isAuth } = useAuth()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.main__search}>
            <div className={styles.search__logo_img} />
            <form
              className={styles.search__form}
              action="#"
              onSubmit={(e) => {
                e.preventDefault()
                if (page === 'Main') {
                  dispatch(findArticles(search))
                }
                navigate(`/`, {
                  replace: false,
                })
              }}
            >
              {page === 'Main' && (
                <input
                  className={styles.search__text}
                  type="search"
                  placeholder="Поиск по объявлениям"
                  name="search"
                  onChange={(e) => {
                    e.preventDefault()
                    setSearch(e.target.value === '' ? 'clear' : e.target.value)
                  }}
                />
              )}
              <MyButton
                name={page === 'Main' ? 'Найти' : 'Вернуться на главную'}
                action={() => {
                  if (page === 'Main') {
                    dispatch(findArticles(search))
                  }
                  navigate(`/`, {
                    replace: false,
                  })
                }}
                hideable
              />
            </form>
          </div>
          <SkeletonTheme baseColor="#f0f0f0;" highlightColor="#00C1FF">
            <Outlet />
          </SkeletonTheme>
        </main>
        {modal && (
          <div className={styles.modalBg}>
            {modal === 'authModal' && <SignIn />}
            {modal === 'newArticleModal' && <AddOrChangeArticle />}
            {modal === 'changeArtModal' && <AddOrChangeArticle change />}
            {modal === 'reviewsModal' && <Reviews />}
            {modal === 'uploadImage' && <UploadImage />}
          </div>
        )}
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__img}>
              <NavLink to={`/`}>
                <img src={icon01} alt="home" />
              </NavLink>
            </div>
            <div
              className={styles.footer__img}
              onClick={() => dispatch(setCurrentModal('newArticleModal'))}
            >
              <img src={icon02} alt="home" />
            </div>
            <div
              className={styles.footer__img}
              onClick={() => {
                if (isAuth) {
                  navigate(`/myProfile`, {
                    replace: true,
                  })
                } else {
                  setCurrentModal('authModal')
                }
              }}
            >
              <img src={icon03} alt="home" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
