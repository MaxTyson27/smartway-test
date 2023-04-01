import { Route, Routes } from 'react-router-dom'
import styles from './App.module.sass'
import Home from './pages/Home/Home'
import ProfilePage from './pages/ProfilePage'

const App = () => {

  return (
    <div className={styles.root}>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile/:id' element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  )

}


export default App
