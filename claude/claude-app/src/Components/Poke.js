import { FaTimes } from 'react-icons/fa';


const Poke = ({pokemon}) => {
  return (
    <div className='poke'>
        <h3>Name:  {pokemon.name}  <FaTimes style= {{color: 'red', cursor: 'pointer'}}/>
        </h3> 
        <p>Type: {pokemon.type}</p>     
    </div>
  )
}

export default Poke
