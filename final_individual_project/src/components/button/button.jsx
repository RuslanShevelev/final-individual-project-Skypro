import React from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'

export const MyButton = ({ name, action, hideable }) => {
  return (
    <button
      onClick={action}
      className={
        hideable ? classNames(styles.myButton, styles.hide) : styles.myButton
      }
    >
      {name}
    </button>
  )
}
