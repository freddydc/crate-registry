import { TodoCard, TodoMenu, TodoSearch } from './components/todo'

export function App() {
  return (
    <TodoCard>
      <TodoMenu />
      <TodoSearch />
    </TodoCard>
  )
}
