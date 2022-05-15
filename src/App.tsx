import { Layout } from './components/common'
import { TodoProvider } from './components/todo/context'

export function App() {
  return (
    <TodoProvider>
      <Layout />
    </TodoProvider>
  )
}
