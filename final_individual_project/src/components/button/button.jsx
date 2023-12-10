import React from 'react'
import styles from './button.module.scss'

export const MyButton = ({ name }) => (
  <button className={styles.myButton}>{name}</button>
)
