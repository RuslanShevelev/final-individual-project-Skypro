import React from 'react'
import styles from './button.module.scss'
import { useDispatch } from 'react-redux'
import { setCurrentModal } from 'store/slices/modalsSlice'

export const MobileButton = ({ color, action, zInd }) => {
  const dispatch = useDispatch()

  return (
    <div
      className={styles.buttonDiv}
      onClick={() => {
        if (action) {
          action()
        } else {
          dispatch(setCurrentModal(''))
        }
      }}
      style={zInd ? { zIndex: `${zInd}` } : { zIndex: 1 }}
    >
      <svg
        className={styles.mobileBtn}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="21"
        viewBox="0 0 12 21"
        fill="none"
        stroke={color ? `${color}` : 'black'}
        style={zInd ? { zIndex: `${zInd}` } : { zIndex: 1 }}
      >
        <path d="M11 1.5L2 10.5L11 19.5" strokeWidth="2" />
      </svg>
    </div>
  )
}
