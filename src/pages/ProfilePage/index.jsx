import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Profile from '../../Components/Profile'
import { sortProfiles } from '../../helpers/sortProfiles'
import { selectRepository } from '../../redux/repositories/selectors'
import styles from './ProfilePage.module.sass'


const ProfilePage = () => {
  const { profiles, favourites, fromFavourite } = useSelector(selectRepository)
  const { id } = useParams()

  const profile = sortProfiles(fromFavourite ? favourites : profiles, Number(id))

  return (
    <div className={styles.root}>
      <Profile {...profile} isFavourite={true} isMore={true} />
    </div>
  )
}

export default ProfilePage
