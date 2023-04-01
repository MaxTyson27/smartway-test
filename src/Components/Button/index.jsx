import React, { useState } from 'react'
import styles from './Button.module.sass'

const Button = ({ handleClick }) => {
  const [value, setValue] = useState('copy')
  const onClick = () => {
    handleClick()
    setValue('copied')
    setTimeout(() => {
      setValue('copy')
    }, 2000)
  }
  return (
    <button onClick={onClick} className={styles.btn} type='button'>
      {value}
    </button>
  )
}

export default Button
