import classNames from 'classnames/bind'
import { useContext } from 'react'
import { TodoContext } from '../context'

import styles from './TodoAdd.module.css'

const cn = classNames.bind(styles)

export const TodoAdd = () => {
  const { setOpenModal, openModal } = useContext(TodoContext)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <div className={styles.creatorMenu}>
      <button className={cn({ hideMenu: openModal })} onClick={handleOpenModal}>
        Add
      </button>
    </div>
  )
}
