import styles from './TodoMenu.module.css'

type Props = {
  activeCrates: number
  completedCrates: number
  allCrates: number
}

export const TodoMenu = ({
  activeCrates,
  completedCrates,
  allCrates
}: Props) => {
  return (
    <div className={styles.summaryMenu}>
      <ul>
        <li>
          <button>
            <svg viewBox="0 0 512 512">
              <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V199.8c0-5.2-.8-10.3-2.5-15.2zM32 199.8c0-1.7.3-3.4.8-5.1L83.4 42.9C85.6 36.4 91.7 32 98.6 32H240v168H32v-.2zM480 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V232h448v232zm0-264H272V32h141.4c6.9 0 13 4.4 15.2 10.9l50.6 151.8c.5 1.6.8 3.3.8 5.1v.2z" />
            </svg>
            <div>All</div>
            <span>{allCrates}</span>
          </button>
        </li>
        <li>
          <button>
            <svg viewBox="0 0 100 100">
              <path d="m 35.15625,56.25 h -7.8125 C 26.054687,56.25 25,55.195313 25,53.90625 v -7.8125 C 25,44.804687 26.054687,43.75 27.34375,43.75 h 7.8125 c 1.289062,0 2.34375,1.054687 2.34375,2.34375 v 7.8125 C 37.5,55.195313 36.445312,56.25 35.15625,56.25 Z M 56.25,53.90625 v -7.8125 C 56.25,44.804687 55.195312,43.75 53.90625,43.75 h -7.8125 c -1.289063,0 -2.34375,1.054687 -2.34375,2.34375 v 7.8125 c 0,1.289063 1.054687,2.34375 2.34375,2.34375 h 7.8125 c 1.289062,0 2.34375,-1.054687 2.34375,-2.34375 z m 18.75,0 v -7.8125 C 75,44.804687 73.945312,43.75 72.65625,43.75 h -7.8125 C 63.554687,43.75 62.5,44.804687 62.5,46.09375 v 7.8125 c 0,1.289063 1.054687,2.34375 2.34375,2.34375 h 7.8125 C 73.945312,56.25 75,55.195313 75,53.90625 Z m -18.75,18.75 v -7.8125 C 56.25,63.554687 55.195312,62.5 53.90625,62.5 h -7.8125 C 44.804687,62.5 43.75,63.554687 43.75,64.84375 v 7.8125 C 43.75,73.945312 44.804687,75 46.09375,75 h 7.8125 C 55.195312,75 56.25,73.945312 56.25,72.65625 Z m -18.75,0 v -7.8125 C 37.5,63.554687 36.445312,62.5 35.15625,62.5 h -7.8125 C 26.054687,62.5 25,63.554687 25,64.84375 v 7.8125 C 25,73.945312 26.054687,75 27.34375,75 h 7.8125 C 36.445312,75 37.5,73.945312 37.5,72.65625 Z m 37.5,0 v -7.8125 C 75,63.554687 73.945312,62.5 72.65625,62.5 h -7.8125 C 63.554687,62.5 62.5,63.554687 62.5,64.84375 v 7.8125 C 62.5,73.945312 63.554687,75 64.84375,75 h 7.8125 C 73.945312,75 75,73.945312 75,72.65625 Z M 93.75,21.875 v 68.75 c 0,5.175781 -4.199219,9.375 -9.375,9.375 H 15.625 C 10.449219,100 6.25,95.800781 6.25,90.625 v -68.75 c 0,-5.175781 4.199219,-9.375 9.375,-9.375 H 25 V 2.34375 C 25,1.0546875 26.054687,0 27.34375,0 h 7.8125 C 36.445312,0 37.5,1.0546875 37.5,2.34375 V 12.5 h 25 V 2.34375 C 62.5,1.0546875 63.554687,0 64.84375,0 h 7.8125 C 73.945312,0 75,1.0546875 75,2.34375 V 12.5 h 9.375 c 5.175781,0 9.375,4.199219 9.375,9.375 z M 84.375,89.453125 V 31.25 h -68.75 v 58.203125 c 0,0.644531 0.527344,1.171875 1.171875,1.171875 h 66.40625 c 0.644531,0 1.171875,-0.527344 1.171875,-1.171875 z" />
            </svg>
            <div>Active</div>
            <span>{activeCrates}</span>
          </button>
        </li>
        <li>
          <button>
            <svg viewBox="0 0 384 512">
              <path d="M128 96v32h32V96zm65.9 169.6c-1.1-5.6-6-9.6-11.8-9.6H160v-32h-32v32l-19.4 97.2c-6.5 32.5 18.3 62.8 51.4 62.8s57.9-30.3 51.4-62.8zm-33.6 124.5c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zM128 160v32h32v-32zm64-96h-32v32h32zm177.9 33.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.4 2.1 7.4 4.2l83.9 83.9c2 2 3.5 4.6 4.2 7.4H256zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h79.7v32h32V32H224v104c0 13.3 10.7 24 24 24h104zM192 192h-32v32h32zm0-64h-32v32h32z" />
            </svg>
            <div>Completed</div>
            <span>{completedCrates}</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
