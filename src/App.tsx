import {
  TodoAdd,
  TodoCard,
  TodoList,
  TodoMenu,
  TodoSearch,
  TodoView
} from './components/todo'

const crates = [
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
  return (
    <TodoCard>
      <TodoMenu />
      <TodoSearch />
      <TodoList>
        {crates.map(item => (
          <TodoView key={item.id} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <TodoAdd />
    </TodoCard>
  )
}
