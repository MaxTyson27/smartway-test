import React from 'react'
import { useSelector } from 'react-redux'
import { STATUS } from '../../constants/status'
import { selectRepository } from '../../redux/repositories/selectors'
import Profile from '../Profile'
import styles from './Repositories.module.sass'

const Repositories = () => {
  const { profiles, status } = useSelector(selectRepository)

  const profileElems = profiles.map(profile => {
    return <Profile elemSize='400' key={profile.id} {...profile} />
  })

  return (
    <div className={styles.root}>
      <h2 className='title'>Список репозиториев:</h2>
      {!profiles.length ? <>Ничего не найдено</> : status === STATUS.loading ? <>Загрузка...</> : profileElems}
    </div>
  )
}

export default Repositories
