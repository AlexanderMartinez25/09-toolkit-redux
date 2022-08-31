import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
        count is {counter}
      </p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Incremet
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Incremet by 2
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
