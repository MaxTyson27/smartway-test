import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleFromFavourite } from '../../redux/repositories/slice'
import AddButton from './AddButton'
import Info from './Info'
import styles from './Profile.module.sass'

const Profile = (props) => {
  const dispatch = useDispatch()
  const { owner, elemSize, id, isFavourite, isMore } = props
  const handleLinkClick = () => {
    if (isFavourite) {
      dispatch(toggleFromFavourite(true))
    } else {
      dispatch(toggleFromFavourite(false))
    }
  }
  return (
    <div style={{ maxWidth: elemSize + 'px' }} className={styles.root}>
      <img src={owner.avatar_url} alt="profile's avatar" />
      <Info isMore={isMore} {...props} />
      {isMore ? '' : <Link onClick={handleLinkClick} className={styles.more_link} to={`/profile/${id}`}>More information</Link>}
      {!isFavourite ? <AddButton id={id} /> : ''}
    </div>
  )
}

export default Profile
