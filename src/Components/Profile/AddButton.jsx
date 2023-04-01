import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavourite } from '../../redux/repositories/slice'
import styles from './Profile.module.sass'


const AddButton = ({ id }) => {

  const dispatch = useDispatch()

  const handleClickBtn = () => {
    dispatch(addFavourite(id))
  }

  return (
    <button
      onClick={handleClickBtn}
      className={styles.favourite}
      type='button'>
      +
    </button>
  )
}

export default AddButton
