import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./src/store/apis/todosApi"

export const TodoApp = () => {

  // estos datos los crea por defecto el RTK QUERY
  // renombramos la data a todos
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1)

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1)
  }


  return (
    <>
      <h1>Todos RTK - Query</h1>
      <hr />
      <h4>IsLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={nextTodo}>Next Todo</button>
      <button onClick={prevTodo}>Prev Todo</button>
      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
              {todo.title}
            </li>
          ))
        }
      </ul> */}
    </>
  )
}
