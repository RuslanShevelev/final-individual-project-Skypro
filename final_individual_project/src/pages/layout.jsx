import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findArticles } from 'store/slices/modalsSlice'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from '../css/layout.module.scss'
import icon01 from '../img/icon_01.png'
import icon02 from '../img/icon_02.png'
import icon03 from '../img/icon_03.png'
import { MyButton } from 'components/buttons/button'
import { Header } from 'components/header/header'
import { AddOrChangeArticle } from 'modal/addnewarticle'
import { SignIn } from 'modal/signin'
import { Reviews } from 'modal/reviews'
import { UploadImage } from 'modal/upload-image/upload_image'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useFetchAllArticlesQuery } from 'services/appService'

export const Layout = () => {
  useFetchAllArticlesQuery()
  const dispatch = useDispatch()
  // const [page, setPage] = useState('Main')
  const page = useSelector((state) => state.modals.currentPage)
  const modal = useSelector((state) => state.modals.currentModal)
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  // console.log(params)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.main__search}>
            <a className={styles.search__logoLink} href="#" target="_blank">
              <div className={styles.search__logo_img} />
            </a>
            <form className={styles.search__form} action="#">
              {page === 'Main' && (
                <input
                  className={styles.search__text}
                  type="search"
                  placeholder="Поиск по объявлениям"
                  name="search"
                  onChange={(e) => {
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
                  // setPage('Main')
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
            {modal === 'reviewsModal' && <Reviews />}
            {modal === 'uploadImage' && <UploadImage />}
          </div>
        )}
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src={icon01} alt="home" />
              </a>
            </div>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src={icon02} alt="home" />
              </a>
            </div>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src={icon03} alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
