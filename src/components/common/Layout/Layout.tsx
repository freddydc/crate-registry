import { useContext } from 'react'
import {
  TodoAdd,
  TodoCard,
  TodoForm,
  TodoList,
  TodoMenu,
  TodoSearch,
  TodoView
} from '../../todo'
import { TodoContext } from '../../todo/context'
import { Message, Modal, Skeleton } from '../../ui'

export const Layout = () => {
  const { crateList, error, loading, completeCrate, deleteCrate, openModal } =
    useContext(TodoContext)

  return (
    <TodoCard>
      <TodoMenu />
      <TodoSearch />
      <TodoList>
        {loading ? (
          <Skeleton />
        ) : error ? (
          <Message text="An error occurred" variant="error" />
        ) : (
          crateList.map(item => (
            <TodoView
              key={item.id}
              text={item.text}
              completed={item.completed}
              completeCrate={() => completeCrate(item.id)}
              deleteCrate={() => deleteCrate(item.id)}
            />
          ))
        )}
        {!loading && crateList.length === 0 && (
          <Message text="Add your first crate!" />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoAdd />
    </TodoCard>
  )
}
