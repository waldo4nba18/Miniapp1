import { useState, useEffect } from "react"




export const Poke = ({ pokemon }) => {
    const [pokemonImage, setPokemonImage] = useState({ url: '' })

    useEffect(() => {

        fetch(pokemon.url)
            .then(res => res.json())
            .then(data => setPokemonImage(data.sprites.other.dream_world.front_default))

    } , [pokemon.url])
    




return (
    <div className='poke'>
        <img id="images"src={pokemonImage} alt=""/>
        <h1>{pokemon.name} </h1>

    </div>
)
}

export default Poke
