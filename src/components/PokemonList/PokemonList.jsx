import { useEffect } from "react";
import axios from 'axios';

function PokemonList(){
 async function PokemonFetchedList(){
   const  API_URL = `https://pokeapi.co/api/v2/pokemon`;
   const response =  await axios.get(API_URL);
   console.log(response.data)
   const result = response.data.results;
   console.log(result)
   const pokemonData = result.map((pokemon) => axios.get(pokemon.url) )
   const pokemonDataFetched = await axios.all(pokemonData)

   console.log(pokemonDataFetched)

  }

  useEffect(()=>{
    PokemonFetchedList();
  },[]);

    return(
        <>
        Pokemonlist
        </>
    )
}
export default PokemonList;