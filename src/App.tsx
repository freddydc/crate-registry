import { useState } from 'react'
import {
  TodoAdd,
  TodoCard,
  TodoList,
  TodoMenu,
  TodoSearch,
  TodoView
} from './components/todo'
import { Message } from './components/ui'
import { useLocalStorage } from './hooks/useLocalStorage'

type Data = {
  id: string
  text: string
  completed: boolean
}

function fetchData() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<Data>>([])
  const [value, setValue] = useLocalStorage<Data[]>('crates', [])

  setTimeout(() => {
    try {
      setData(value)
      setLoading(false)
    } catch (err) {
      setError(true)
    }
  }, 1000)

  return {
    error,
    loading,
    data,
    setValue
  }
}

export function App() {
  const {
    error,
    loading,
    data: crateList,
    setValue: setCrateList
  } = fetchData()

  const [term, setTerm] = useState('')

  const activeCrates = crateList.filter(x => x.completed === false).length
  const completedCrates = crateList.filter(x => !!x.completed).length
  const allCrates = crateList.length

  let crates = []
  if (term.length > 0) {
    const foundCrates = crateList.filter(crate =>
      crate.text.toLowerCase().includes(term.toLowerCase())
    )
    crates = foundCrates
  } else {
    crates = crateList
  }

  const completeCrate = (id: string) => {
    const crateIndex = crateList.findIndex(x => x.id === id)
    const newList = [...crateList]
    newList[crateIndex].completed = !newList[crateIndex].completed
    setCrateList(newList)
  }

  const deleteCrate = (id: string) => {
    const crateIndex = crateList.findIndex(x => x.id === id)
    const newList = [...crateList]
    newList.splice(crateIndex, 1)
    setCrateList(newList)
  }

  return (
    <TodoCard>
      <TodoMenu
        allCrates={allCrates}
        activeCrates={activeCrates}
        completedCrates={completedCrates}
      />
      <TodoSearch term={term} setTerm={setTerm} />
      <TodoList>
        {loading && <Message text="Loading..." variant="loading" />}
        {error && <Message text="An error occurred" variant="error" />}
        {!loading && crateList.length === 0 && (
          <Message text="Add your first crate!" />
        )}
        {crates.map(item => (
          <TodoView
            key={item.id}
            text={item.text}
            completed={item.completed}
            completeCrate={() => completeCrate(item.id)}
            deleteCrate={() => deleteCrate(item.id)}
          />
        ))}
      </TodoList>
      <TodoAdd />
    </TodoCard>
  )
}
