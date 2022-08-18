import Header from './Components/Header';
import Pokemon from './Components/Pokemon';
import {useState, useEffect} from 'react'


const App = () => {
const[pokemon, setPokemon] = useState([]);

useEffect(() => {
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const fetchData = async () => {
    
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data.results);
    
  }
  
  fetchData();
} , []);




return (
      <div className="container">
        <Header title = 'Make a team'/>
        <Pokemon pokemon ={pokemon}  />
      </div>


)


}


export default App;