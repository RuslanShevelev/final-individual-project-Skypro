import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentModal } from 'store/slices/modalsSlice'
import styles from './button.module.scss'

export const CloseButton = () => {
  const dispatch = useDispatch()

  return (
    <div
      className={styles.btnClose}
      onClick={() => {
        dispatch(setCurrentModal(''))
      }}
    />
  )
}
