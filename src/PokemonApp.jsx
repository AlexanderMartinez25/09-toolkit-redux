import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const { isloadding, pokemons = [], page } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isloadding ? 'True' : 'False'}</span>

      <ul>
        {
          pokemons.map(({ name }) => (
            <li>{name}</li>
          ))
        }
      </ul>

      <button
        disabled={isloadding}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
