import { React, useState } from 'react'
import styles from '../css/addnewat.module.scss'
import { CloseButton } from 'components/buttons/closebutton'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import {
  usePostArticleMutation,
  usePostIextMutation,
  // usePostImageMutation,
} from 'services/appService'
import { usePreview } from 'hooks/usePreview'

export const AddOrChangeArticle = ({ change }) => {
  const { currentArt: changinData } = useSelector((state) => state.modals)
  const [articleData, setArticleData] = useState(change ? changinData : {})
  const [postNewArticle] = usePostArticleMutation()
  const [postNewTexts] = usePostIextMutation()
  // const [postImage, newImage] = usePostImageMutation()
  const [changeHandler, images, imageFiles] = usePreview()

  const postNewArt = (e) => {
    e.preventDefault()
    if (imageFiles?.length) {
      postNewArticle({
        data: articleData,
        images: imageFiles,
      })
    } else {
      postNewTexts(articleData)
    }
    // if(change){}
    // if (imageFiles.length) {
    //   const img = new FormData()
    //   imageFiles.forEach((image, i) => {
    //     img.append(`image`, image)
    //   })
    //   setBodyImg(img)
    // }
    // })
  }
  console.log(imageFiles)

  const inputHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setArticleData({ ...articleData, title: e.target.value })
        break
      case 'description':
        setArticleData({ ...articleData, description: e.target.value })
        break
      case 'price':
        setArticleData({ ...articleData, price: e.target.value })
        break
      default:
        break
    }
  }

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
              name="title"
              defaultValue={articleData?.title}
              id="formName"
              placeholder="Введите название"
              onChange={(e) => {
                inputHandler(e)
              }}
            />
          </div>
          <div className={styles.formNewArt__block}>
            <label htmlFor="text">Описание</label>
            <textarea
              className={styles.formNewArt__area}
              name="description"
              id="formArea"
              cols="auto"
              rows={10}
              defaultValue={articleData?.description}
              placeholder="Введите описание"
              onChange={(e) => {
                inputHandler(e)
              }}
            />
          </div>
          <div className={styles.formNewArt__block}>
            <p className={styles.formNewArt__p}>
              Фотографии товара<span>не более 5 фотографий</span>
            </p>
            <ul className={styles.formNewArt__barImg}>
              {change &&
                changinData?.images?.map((image) => (
                  <li key={image.id} className={styles.formNewArt__img}>
                    <img src={`http://localhost:8090/${image.url}`} alt="" />
                  </li>
                ))}
              {images &&
                images.map((image, idx) => (
                  <li key={idx} className={styles.formNewArt__img}>
                    <img src={image} alt="" />
                  </li>
                ))}
              {Array(
                5 - images?.length - (change ? changinData?.images?.length : 0),
              )
                .fill()
                .map(() => (
                  <li key={Math.random()} className={styles.formNewArt__img}>
                    <label
                      htmlFor="image"
                      className={styles.formNewArt__imgCover}
                    />
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      id="image"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        if (
                          images?.length +
                            (change ? changinData?.images?.length : 0) +
                            e.target.files.length >
                          5
                        ) {
                          alert('Возможно опубликовать только пять фотографий')
                          return
                        }
                        changeHandler(e)
                      }}
                      multiple
                    />
                  </li>
                ))}

              {/* <div className={styles.formNewArt__img}>
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
              </div> */}
            </ul>
          </div>
          <div className={styles.formNewArt__block}>
            {/* block-price */}
            <label htmlFor="price">Цена</label>
            <input
              className={styles.formNewArt__inputPrice}
              type="number"
              name="price"
              defaultValue={articleData?.price}
              id="formName"
              onChange={(e) => {
                inputHandler(e)
              }}
            />
            <div className={styles.formNewArt__inputPriceCover} />
          </div>
          <button
            className={styles.formNewArt__btnPub}
            onClick={(e) => {
              postNewArt(e)
            }}
          >
            {change ? 'Сохранить' : 'Опубликовать'}
          </button>
        </form>
      </div>
    </div>
    // </div>
  )
}
