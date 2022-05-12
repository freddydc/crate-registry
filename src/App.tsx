import { useState } from 'react'
import {
  TodoAdd,
  TodoCard,
  TodoList,
  TodoMenu,
  TodoSearch,
  TodoView
} from './components/todo'

const defaultCrates = [
  {
    id: '1',
    text: 'fuzz',
    completed: true
  },
  {
    id: '2',
    text: 'baz',
    completed: false
  },
  {
    id: '3',
    text: 'foo',
    completed: false
  },
  {
    id: '4',
    text: 'fizz',
    completed: false
  }
]

export function App() {
  const [crateList, setCrateList] = useState(defaultCrates)
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
