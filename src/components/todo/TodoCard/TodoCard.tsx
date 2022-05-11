import { ReactNode } from 'react'
import styles from './TodoCard.module.css'

type Props = {
  children?: ReactNode
}

export const TodoCard = ({ children }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Crate registry</div>
      {children}
    </div>
  )
}
