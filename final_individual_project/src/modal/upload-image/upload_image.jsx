import { React, useState } from 'react'
import './upload_image.css'

export const UploadImage = ({ element, onImageUrlChange }) => {
  const [imageUrl, setImageUrl] = useState(null)
  console.log(imageUrl)
  //   const fileInputElement = element.querySelector('.file-upload-input')

  //   fileInputElement?.addEventListener('change', () => {
  //     const file = fileInputElement.files[0]
  //     if (file) {
  //       const lableEl = document.querySelector('.file-upload-label')
  //       lableEl.setAttribute('disabled', true)
  //       lableEl.textContent = 'Загружаю файл...'
  //       uploadImage({ file }).then(({ fileUrl }) => {
  //         imageUrl = fileUrl
  //         onImageUrlChange(imageUrl)
  //         render()
  //       })
  //     }
  //   })

  //   element
  //     .querySelector('.file-upload-remove-button')
  //     ?.addEventListener('click', () => {
  //       imageUrl = ''
  //       onImageUrlChange(imageUrl)
  //       render()
  //     })

  return (
    <div className="upload=image">
      {imageUrl ? (
        <div className="file-upload-image-conrainer">
          <img className="file-upload-image" src={imageUrl} />
          <button className="file-upload-remove-button button">
            Заменить фото
          </button>
        </div>
      ) : (
        <label className="file-upload-label secondary-button">
          <input
            type="file"
            className="file-upload-input"
            style={{ display: 'none' }}
            onChange={(e) => {
              setImageUrl(e.target.files[0])
            }}
          />
          Выберите фото
        </label>
      )}
    </div>
  )
}
