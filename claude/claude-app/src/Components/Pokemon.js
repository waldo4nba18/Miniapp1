import Poke from './Poke'

const Pokemon = ({pokemon}) => {
 

  return (
    
    <>
      {pokemon.map((pokemon) => (
      <Poke key={pokemon.id} pokemon={pokemon}   /> 
      ))} 
    </>
  )
}

export default Pokemon
