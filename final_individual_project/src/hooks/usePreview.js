import { useEffect, useState } from 'react'

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm

export function usePreview() {
  const [imageFiles, setImageFiles] = useState([])
  const [images, setImages] = useState([])

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
    const images = []
    const fileReaders = []
    let isCancel = false
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader()
        fileReaders.push(fileReader)
        fileReader.onload = (e) => {
          const { result } = e.target
          if (result) {
            images.push(result)
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images)
          }
        }
        fileReader.readAsDataURL(file)
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

  return [changeHandler, images, imageFiles]
}
