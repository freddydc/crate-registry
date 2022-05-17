import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { TodoContext } from '../context'

import styles from './TodoForm.module.css'

export const TodoForm = () => {
  const [text, setText] = useState('')
  const { addCrate, setOpenModal } = useContext(TodoContext)

  const handleClose = () => setOpenModal(state => !state)
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.length !== 0) {
      addCrate(text)
    }
    handleClose()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Add new crate</label>
      <input placeholder="New crate" value={text} onChange={handleChangeText} />
      <div>
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Accept</button>
      </div>
    </form>
  )
}
