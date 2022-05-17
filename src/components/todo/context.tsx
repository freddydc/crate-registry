import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
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
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  activeCrates: number
  completedCrates: number
  allCrates: number
  completeCrate: (id: string) => void
  deleteCrate: (id: string) => void
  error: boolean
  loading: boolean
  getCompleted: () => void
  getActive: () => void
  getAll: () => void
}

const initialState = {} as State

export const TodoContext = createContext(initialState)

export const TodoProvider = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [crateList, setCrateList] = useLocalStorage<Crate[]>('crates', [])
  const [filteredCrate, setFilteredCrate] = useState<Crate[]>([])

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const activeCrates = crateList.filter(x => x.completed === false).length
  const completedCrates = crateList.filter(x => !!x.completed).length
  const allCrates = crateList.length

  const completeCrate = (id: string) => {
    const index = crateList.findIndex(x => x.id === id)
    const newCratesList = [...crateList]
    newCratesList[index].completed = !newCratesList[index].completed
    setCrateList(newCratesList)
    setFilteredCrate(newCratesList)
  }

  const deleteCrate = (id: string) => {
    const index = crateList.findIndex(x => x.id === id)
    const newCrateList = [...crateList]
    newCrateList.splice(index, 1)
    setCrateList(newCrateList)
    setFilteredCrate(newCrateList)
  }

  const getCompleted = () => {
    setFilteredCrate(crateList.filter(x => !!x.completed))
  }

  const getAll = () => {
    setFilteredCrate(crateList)
  }

  const getActive = () => {
    setFilteredCrate(crateList.filter(x => !x.completed))
  }

  useEffect(() => {
    if (searchTerm.length !== 0) {
      setFilteredCrate(
        crateList.filter(x =>
          x.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    } else {
      setFilteredCrate(crateList)
    }
  }, [searchTerm])

  useEffect(() => {
    setTimeout(() => {
      try {
        setLoading(false)
      } catch (err) {
        setError(true)
      }
    }, 1000)
  }, [])

  const value = {
    error,
    loading,
    crateList: filteredCrate,
    setCrateList,
    searchTerm,
    setSearchTerm,
    allCrates,
    completedCrates,
    activeCrates,
    deleteCrate,
    completeCrate,
    openModal,
    setOpenModal,
    getCompleted,
    getActive,
    getAll
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
