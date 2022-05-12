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

  let crates = []
  if (term.length > 0) {
    const foundCrates = crateList.filter(crate =>
      crate.text.toLowerCase().includes(term.toLowerCase())
    )
    crates = foundCrates
  } else {
    crates = crateList
  }

  return (
    <TodoCard>
      <TodoMenu />
      <TodoSearch term={term} setTerm={setTerm} />
      <TodoList>
        {crates.map(item => (
          <TodoView key={item.id} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <TodoAdd />
    </TodoCard>
  )
}
