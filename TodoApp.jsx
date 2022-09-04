import { useGetTodosQuery } from "./src/store/apis/todosApi"




export const TodoApp = () => {

  // estos datos los crea por defecto el RTK QUERY
  // renombramos la data a todos
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todos RTK - Query</h1>
      <hr />
      <h4>IsLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>...</pre>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
              {todo.title}
            </li>
          ))
        }
      </ul>

      <button>Next Todo</button>
    </>
  )
}
