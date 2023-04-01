import React from 'react'
import { sortMoreInfo } from '../../helpers/sortMoreInfo'
import styles from './Profile.module.sass'

const Info = (props) => {

  const { html_url, forks, name, stargazers_count, isMore } = props

  const infoElems = sortMoreInfo(props).map((item, i) => {
    return (
      <li key={i}>
        {item}
      </li>
    )
  })


  return (
    <ul className={styles.info}>
      {isMore ? infoElems
        :
        <>
          <li>Information:</li>
          <li>Repository name: {name}</li>
          <li>
            Repository link: <a href={html_url} target="_blank">{html_url}</a>
          </li>
          <li>Stargazers: {stargazers_count}</li>
          <li>Forks: {forks}</li>
        </>
      }
    </ul>
  )
}

export default Info