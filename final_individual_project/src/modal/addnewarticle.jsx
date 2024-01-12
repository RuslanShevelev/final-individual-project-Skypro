import React, { useEffect, useState } from 'react'
import styles from '../css/addnewat.module.scss'
import { CloseButton } from 'components/buttons/closebutton'
import classNames from 'classnames'
import { usePostArticleMutation } from 'services/appService'

export const AddOrChangeArticle = () => {
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm
  const [imageFiles, setImageFiles] = useState([])
  const [images, setImages] = useState([])
  const [articleData, setArticleData] = useState({})
  const [postNewArticle, result] = usePostArticleMutation()

  const changeHandler = (e) => {
    const { files } = e.target
    const validImageFiles = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file)
      }
    }
    if (validImageFiles.length) {
      setImageFiles([...imageFiles, ...validImageFiles])
      return
    }
    alert('Недопустимый формат изображения!')
  }
  useEffect(() => {
    if (imageFiles.length) {
      console.log(imageFiles)
      const formData = new FormData()
      imageFiles.forEach((image, i) => {
        formData.append(`image_${i}`, image)
      })
      // for (let i = 0; i < imageFiles.length; i++) {
      //   )
      // }
      setArticleData({ ...articleData, images: formData })
    }
    return () => {
      setArticleData({})
    }
  }, [imageFiles])

  useEffect(() => {
    const fileReaders = []
    let isCancel = false
    if (imageFiles.length) {
      const promises = imageFiles.map(
        (file) =>
          new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReaders.push(fileReader)
            fileReader.onload = (e) => {
              const { result } = e.target
              if (result) {
                resolve(result)
              }
            }
            fileReader.onabort = () => {
              reject(new Error('File reading aborted'))
            }
            fileReader.onerror = () => {
              reject(new Error('Failed to read file'))
            }
            fileReader.readAsDataURL(file)
          }),
      )
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImages(images)
          }
        })
        .catch((reason) => {
          console.log(reason)
        })
    }
    return () => {
      isCancel = true
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [imageFiles])

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
  console.log(result)
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
              placeholder="Введите описание"
              defaultValue={''}
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
              {images.length > 0 &&
                images.map((image, idx) => (
                  <li key={idx} className={styles.formNewArt__img}>
                    <img src={image} alt="" />
                  </li>
                ))}
              {Array(5 - images?.length)
                .fill()
                .map(() => (
                  <li key={Math.random()} className={styles.formNewArt__img}>
                    <label
                      htmlFor="file"
                      className={styles.formNewArt__imgCover}
                    />
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      id="file"
                      onChange={changeHandler}
                      accept="image/png, image/jpg, image/jpeg"
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
              e.preventDefault()
              postNewArticle(articleData)
            }}
            id="btnPublish"
          >
            {/* btn-hov02 */}
            Опубликовать
          </button>
        </form>
      </div>
    </div>
    // </div>
  )
}
