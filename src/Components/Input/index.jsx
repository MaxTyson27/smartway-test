import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../../helpers/debounce';
import { fetchRepositories } from '../../redux/repositories/asyncActions';
import { selectSearchValue } from '../../redux/repositories/selectors';
import { resetProfiles, setSearchValue } from '../../redux/repositories/slice';

import styles from './Input.module.sass'


const Input = ({ clipboard }) => {
  const dispatch = useDispatch()
  const searchValue = useSelector(selectSearchValue)

  /* 
    Реазилация throttling:

    const handleInputThrottling = useCallback((event) => {
      const { value } = event.target;
      setInputValue(value);
      const timeoutId = setTimeout(() => {
        if (value) {
          dispatch(fetchRepositories(value))
        }
      }, 1000);
      return () => clearTimeout(timeoutId);
    }, []);
  */

  /* 
  Подумал, что в этом случае реализация с debouncing будет эффективнее, так как намного меньше выполнятеся запросов и не блокируется API
  Что бы проверить работу с Throttling необходимо заккоментировать функции: handleInputDebounced, handleInput и раскоментировать и вызвать в onChange соответственно handleInputThrottling
  */

  const handleInputDebounced = useCallback(
    debounce((value) => {
      if (value) {
        dispatch(fetchRepositories(value))
      } else {
        dispatch(resetProfiles())
      }
    }, 500),
    []
  );

  const handleInput = (event) => {
    const { value } = event.target;
    dispatch(setSearchValue(value))
    handleInputDebounced(value);
  };

  return (
    <input
      ref={clipboard.target}
      onChange={handleInput}
      value={searchValue}
      className={styles.root}
      type="text"
      placeholder='Find repository...'
    />
  )
}

export default Input
