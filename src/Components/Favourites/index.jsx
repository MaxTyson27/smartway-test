import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavourites } from '../../redux/repositories/selectors'
import Profile from '../Profile'
import styles from './Favourites.module.sass'

const Favourites = () => {

  const favouritesProfiles = useSelector(selectFavourites)

  return (
    <div className={styles.root}>
      <h2 className="title">
        Избранное:
      </h2>
      <ul className={styles.list}>
        {favouritesProfiles.map(profile => {
          return <Profile {...profile} key={profile.id} isFavourite={true} />
        })}
      </ul>
    </div>
  )
}

export default Favourites
