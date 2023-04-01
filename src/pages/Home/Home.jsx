import React from 'react'
import Favourites from '../../Components/Favourites'
import Header from '../../Components/Header'
import Repositories from '../../Components/Repositories'
import styles from './Home.module.sass'

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <Repositories />
        <Favourites />
      </div>
    </div>
  )
}

export default Home
