import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

type Props = {
  children?: ReactNode
}

type Crate = {
  text: string
  completed: boolean
  id: string
}

type State = {
  crateList: Crate[]
  setCrateList: Dispatch<SetStateAction<Crate[]>>
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  activeCrates: number
  completedCrates: number
  allCrates: number
  completeCrate: (id: string) => void
  deleteCrate: (id: string) => void
  error: boolean
  loading: boolean
}

function fetchData() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Crate[]>([])
  const [localData, setLocalData] = useLocalStorage<Crate[]>('crates', [])

  setTimeout(() => {
    try {
      setData(localData)
      setLoading(false)
    } catch (err) {
      setError(true)
    }
  }, 1000)

  return {
    error,
    loading,
    data,
    setLocalData
  }
}

const initialState = {} as State

export const TodoContext = createContext(initialState)

export const TodoProvider = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const {
    error,
    loading,
    data: crates,
    setLocalData: setCrateList
  } = fetchData()

  const activeCrates = crates.filter(x => x.completed === false).length
  const completedCrates = crates.filter(x => !!x.completed).length
  const allCrates = crates.length

  let crateList = []
  if (searchTerm.length > 0) {
    crateList = crates.filter(x =>
      x.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } else {
    crateList = crates
  }

  const completeCrate = (id: string) => {
    const index = crates.findIndex(x => x.id === id)
    const newCratesList = [...crates]
    newCratesList[index].completed = !newCratesList[index].completed
    setCrateList(newCratesList)
  }

  const deleteCrate = (id: string) => {
    const index = crates.findIndex(x => x.id === id)
    const newCrateList = [...crates]
    newCrateList.splice(index, 1)
    setCrateList(newCrateList)
  }

  const value = {
    error,
    loading,
    crateList,
    setCrateList,
    searchTerm,
    setSearchTerm,
    allCrates,
    completedCrates,
    activeCrates,
    deleteCrate,
    completeCrate
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
