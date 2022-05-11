import { ReactNode } from 'react'
import styles from './TodoList.module.css'

type Props = {
  children?: ReactNode
}

export const TodoList = ({ children }: Props) => {
  return (
    <div className={styles.todoList}>
      <ul>{children}</ul>
    </div>
  )
}
