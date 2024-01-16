import { React, useState, useEffect } from 'react'
import styles from '../../css/addnewat.module.scss'
import { CloseButton } from 'components/buttons/closebutton'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentModal } from 'store/slices/modalsSlice'
import {
  usePostArticleMutation,
  usePostTextMutation,
  useChangeTextsMutation,
  usePostImageMutation,
  useDeleteImageMutation,
} from 'services/appService'
import { usePreview } from 'hooks/usePreview'
import { MyButton } from 'components/buttons/button'
import { Loader } from 'components/loader/loader'
import Skeleton from 'react-loading-skeleton'

export const AddOrChangeArticle = ({ change }) => {
  const { currentArt: changingData } = useSelector((state) => state.modals)
  const [articleData, setArticleData] = useState({})
  const [selectedFiles, setSelectedFiles] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [postNewArticle, newArticle] = usePostArticleMutation()
  const [postNewTexts, newTexts] = usePostTextMutation()
  const [changeTexts, changedTexts] = useChangeTextsMutation()
  const [postImage, newImage] = usePostImageMutation()
  const [deleteImage, deleteingImg] = useDeleteImageMutation()
  const [previewImages, images, imageFiles] = usePreview()
  const dispatch = useDispatch()

  const postNewArt = (e) => {
    e.preventDefault()
    if (confirm && imageFiles?.length) {
      postNewArticle({
        data: articleData,
        images: imageFiles,
      })
    } else {
      postNewTexts(articleData)
    }
  }

  const changeArt = (e) => {
    e.preventDefault()
    if (confirm) {
      changeTexts({ id: changingData.id, body: articleData })
    }
    if (imageFiles.length) {
      imageFiles.forEach((image) => {
        const img = new FormData()
        img.append(`file`, image)
        postImage({ id: changingData.id, body: img })
      })
    }
  }
  useEffect(() => {
    if (selectedFiles?.length) {
      previewImages(selectedFiles)
    }
  }, [selectedFiles])

  useEffect(() => {
    if (
      newArticle?.isSuccess ||
      newTexts?.isSuccess ||
      changedTexts?.isSuccess
    ) {
      dispatch(setCurrentModal(''))
    }
    if (
      newArticle?.isLoading ||
      newTexts?.isLoading ||
      changedTexts?.isLoading
    ) {
      setLoading(true)
    }
    return () => {
      setLoading(false)
    }
  }, [newArticle, newTexts, changedTexts])

  useEffect(() => {
    if (
      !change &&
      articleData.title &&
      articleData.description &&
      articleData.price
    ) {
      setConfirm(true)
    } else if (
      change &&
      (articleData.title ||
        articleData.description ||
        articleData.price ||
        imageFiles.length)
    ) {
      setConfirm(true)
    } else {
      setConfirm(false)
    }
    return () => {
      setConfirm(false)
    }
  }, [articleData, imageFiles])

  console.log(newImage)

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
      case 'file':
        {
          if (
            images?.length +
              (change ? changingData?.images?.length : 0) +
              e.target.files.length >
            5
          ) {
            alert('Возможно опубликовать только пять фотографий')
            return
          }
          const { files } = e.target
          let arr = []
          for (let i = 0; i < files.length; i++) {
            const file = files[i]
            arr = [...arr, file]
          }
          setSelectedFiles([...selectedFiles, ...arr])
        }
        break

      default:
        break
    }
  }

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.modal__block}>
      <div className={styles.modal__content}>
        <h3 className={styles.modal__title}>
          {change ? 'Изменить' : 'Новое'} объявление
        </h3>
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
              defaultValue={change ? changingData?.title : ''}
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
              defaultValue={change ? changingData?.description : ''}
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
                changingData?.images?.map((image) => (
                  <li
                    key={image.id}
                    className={styles.formNewArt__img}
                    onClick={() => {
                      deleteImage({ id: image.ad_id, url: image.url })
                    }}
                  >
                    {deleteingImg.isLoading &&
                    deleteingImg.originalArgs.url === image.url ? (
                      <Skeleton
                        height={83}
                        baseColor="#f0f0f0;"
                        highlightColor="#00C1FF"
                      />
                    ) : (
                      <img src={`http://localhost:8090/${image.url}`} alt="" />
                    )}
                  </li>
                ))}
              {images &&
                images.map((image, idx) => (
                  <li
                    key={idx}
                    className={styles.formNewArt__img}
                    onClick={() => {
                      setSelectedFiles([
                        ...selectedFiles.slice(0, idx),
                        ...selectedFiles.slice(idx + 1),
                      ])
                    }}
                  >
                    <img src={image} alt="" />
                  </li>
                ))}
              {Array(
                5 -
                  images?.length -
                  (change ? changingData?.images?.length : 0),
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
                      name="file"
                      style={{ display: 'none' }}
                      id="image"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        inputHandler(e)
                      }}
                      multiple
                    />
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.formNewArt__block}>
            <label htmlFor="price">Цена</label>
            <input
              className={styles.formNewArt__inputPrice}
              type="number"
              placeholder="Введите цену"
              name="price"
              defaultValue={change ? changingData?.price : null}
              id="formName"
              onChange={(e) => {
                inputHandler(e)
              }}
            />
            <div className={styles.formNewArt__inputPriceCover} />
          </div>
          <MyButton
            name={change ? 'Сохранить' : 'Опубликовать'}
            width={181}
            action={(e) => {
              if (change) {
                changeArt(e)
              } else {
                postNewArt(e)
              }
            }}
            disable={!confirm}
          />
        </form>
      </div>
    </div>
  )
}
