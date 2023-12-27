import React from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'

export const MyButton = ({
  name,
  action,
  hideable,
  phone,
  phoneVisibility,
}) => {
  return (
    <button
      onClick={action}
      className={
        hideable ? classNames(styles.myButton, styles.hide) : styles.myButton
      }
    >
      {name}
      <br />
      {/* {phoneVisibility ? 'Скрыть' : 'Показать'}
                    {'  '}
                    {data?.user?.phone ? 'телефон' : 'e-mail'} */}
      {/* {data && ( */}
      {phone && (
        <span>
          {phone
            .replace(/\D/g, '')
            .replace(
              /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g,
              `$1 $2 ${!phoneVisibility ? 'XXX XX XX' : '$3 $4 $5'}`,
            )}
          {/* // : !phoneVisibility // ? 'XXXXXXXXX' // : data.user.email */}
        </span>
      )}
      {/* ) */}
      {/* } */}
    </button>
  )
}
