import React from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'

export const MyButton = ({
  name,
  action,
  hideable,
  disable,
  phone,
  email,
  phoneVisibility,
}) => (
  <button
    disabled={disable}
    onClick={action}
    className={
      hideable ? classNames(styles.myButton, styles.hide) : styles.myButton
    }
    type="button"
  >
    {name}
    <br />
    <span>
      {phone &&
        phone
          .replace(/\D/g, '')
          .replace(
            /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g,
            `$1 $2 ${!phoneVisibility ? 'XXX XX XX' : '$3 $4 $5'}`,
          )}
      {email && (!phoneVisibility ? 'XXXXXXXXX' : email)}
    </span>
  </button>
)
