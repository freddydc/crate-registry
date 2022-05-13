import { useState } from 'react'
import {
  TodoAdd,
  TodoCard,
  TodoList,
  TodoMenu,
  TodoSearch,
  TodoView
} from './components/todo'

type Crate = {
  id: string
  completed: boolean
  text: string
}

export function App() {
  const storage = localStorage.getItem('crates')
  let crateStorage: Crate[] = []

  if (!storage) {
    localStorage.setItem(
      'crates',
      JSON.stringify([{ id: '1', text: 'fuzz', completed: true }])
    )
  } else {
    crateStorage = JSON.parse(storage)
  }

  const [crateList, setCrateList] = useState(crateStorage)
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

  const saveCrate = (crates: Crate[]) => {
    localStorage.setItem('crates', JSON.stringify(crates))
    setCrateList(crates)
  }

  const completeCrate = (id: string) => {
    const crateIndex = crateList.findIndex(x => x.id === id)
    const newList = [...crateList]
    newList[crateIndex].completed = !newList[crateIndex].completed
    saveCrate(newList)
  }

  const deleteCrate = (id: string) => {
    const crateIndex = crateList.findIndex(x => x.id === id)
    const newList = [...crateList]
    newList.splice(crateIndex, 1)
    saveCrate(newList)
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
