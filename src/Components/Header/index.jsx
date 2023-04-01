import React from 'react'
import { useClipboard } from 'use-clipboard-copy'
import styles from './Header.module.sass'
import Input from '../Input'
import Button from '../Button'
const Header = () => {
  const clipboard = useClipboard()
  return (
    <header className={styles.root}>
      <Input clipboard={clipboard} />
      <Button handleClick={clipboard.copy} />
    </header>
  )
}

export default Header
