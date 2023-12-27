import React from 'react'
import styles from '../css/addnewat.module.scss'
import { CloseButton } from 'components/buttons/closebutton'
import classNames from 'classnames'

export const AddOrChangeArticle = () => {
  return (
    // <div className={styles.containerModal}>
    <div className={styles.modal__block}>
      <div className={styles.modal__content}>
        <h3 className={styles.modal__title}>Новое объявление</h3>
        <div className={styles.modal__btnClose}>
          <CloseButton />
        </div>
        <form
          className={classNames(styles.modal__formNewArt, styles.formNewArt)}
          id="formNewArt"
          action="#"
        >
          <div className={styles.formNewArt__block}>
            <label htmlFor="name">Название</label>
            <input
              className={styles.formNewArt__input}
              type="text"
              name="name"
              id="formName"
              placeholder="Введите название"
            />
          </div>
          <div className={styles.formNewArt__block}>
            <label htmlFor="text">Описание</label>
            <textarea
              className={styles.formNewArt__area}
              name="text"
              id="formArea"
              cols="auto"
              rows={10}
              placeholder="Введите описание"
              defaultValue={''}
            />
          </div>
          <div className={styles.formNewArt__block}>
            <p className={styles.formNewArt__p}>
              Фотографии товара<span>не более 5 фотографий</span>
            </p>
            <div className={styles.formNewArt__barImg}>
              <div className={styles.formNewArt__img}>
                <img src="" alt="" />
                <div className={styles.formNewArt__imgCover} />
              </div>
              <div className={styles.formNewArt__img}>
                <img src="" alt="" />
                <div className={styles.formNewArt__imgCover} />
              </div>{' '}
              <div className={styles.formNewArt__img}>
                <img src="" alt="" />
                <div className={styles.formNewArt__imgCover} />
              </div>{' '}
              <div className={styles.formNewArt__img}>
                <img src="" alt="" />
                <div className={styles.formNewArt__imgCover} />
              </div>{' '}
              <div className={styles.formNewArt__img}>
                <img src="" alt="" />
                <div className={styles.formNewArt__imgCover} />
              </div>
            </div>
          </div>
          <div className={styles.formNewArt__block}>
            {/* block-price */}
            <label htmlFor="price">Цена</label>
            <input
              className={styles.formNewArt__inputPrice}
              type="text"
              name="price"
              id="formName"
            />
            <div className={styles.formNewArt__inputPriceCover} />
          </div>
          <button className={styles.formNewArt__btnPub} id="btnPublish">
            {/* btn-hov02 */}
            Опубликовать
          </button>
        </form>
      </div>
    </div>
    // </div>
  )
}
