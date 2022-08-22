import Header from './Components/Header';
import Pokemon from './Components/Pokemon';

import {useState, useEffect} from 'react'



const  App = () => {
const[pokemon, setPokemon] = useState([]);
useEffect(() => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  fetch(url)
  .then(res => res.json())
  .then(data => {
    setPokemon(data.results);

    
  }).catch(err => console.log(err));
} , []);
// create a function that grabs url from fetch
// function fetchPokemonUrl(pokemon){
//   let url = pokemon.url;
//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
// }
// }







return (
      <div className="container">
        <Header title = 'Kanto Pokedex' />
        <Pokemon pokemon ={pokemon}  />
        
        
      </div>


)


}


export default App;