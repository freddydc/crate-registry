import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.css'

type Props = {
  children?: ReactNode
}

export const Modal = ({ children }: Props) => {
  return createPortal(
    <div className={styles.modal}>{children}</div>,
    document.getElementById('modal')!
  )
}
