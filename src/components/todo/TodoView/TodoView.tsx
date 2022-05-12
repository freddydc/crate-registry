import styles from './TodoView.module.css'

type Props = {
  text: string
  completed: boolean
  completeCrate: () => void
  deleteCrate: () => void
}

export const TodoView = ({
  text,
  completeCrate,
  completed,
  deleteCrate
}: Props) => {
  return (
    <li className={styles.todo}>
      <div className={styles.todoView}>
        <div className={styles.todoCheck}>
          <input type="checkbox" checked={completed} onChange={completeCrate} />
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <label className={styles.todoText}>{text}</label>
        <button onClick={deleteCrate}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}
