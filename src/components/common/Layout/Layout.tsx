import {
  TodoAdd,
  TodoCard,
  TodoList,
  TodoMenu,
  TodoSearch,
  TodoView
} from '../../todo'
import { TodoContext } from '../../todo/context'
import { Message } from '../../ui'

export const Layout = () => {
  return (
    <TodoCard>
      <TodoMenu />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ crateList, error, loading, completeCrate, deleteCrate }) => (
          <TodoList>
            {loading && <Message text="Loading..." variant="loading" />}
            {error && <Message text="An error occurred" variant="error" />}
            {!loading && crateList.length === 0 && (
              <Message text="Add your first crate!" />
            )}
            {crateList.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
                completeCrate={() => completeCrate(item.id)}
                deleteCrate={() => deleteCrate(item.id)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <TodoAdd />
    </TodoCard>
  )
}
