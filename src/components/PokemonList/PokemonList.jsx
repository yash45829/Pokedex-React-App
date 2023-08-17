import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = `https://pokeapi.co/api/v2/pokemon`;

  async function PokemonFetchedList() {
    setIsLoading(true);
    const response = await axios.get(API_URL);
    const result = response.data.results;
    console.log(result);
    const listOfPokemonData = await result.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonDataFetched = await axios.all(listOfPokemonData);
    console.log(pokemonDataFetched);
    const pokemonPakage = pokemonDataFetched.map((pokemon) => {
      return {
        name: pokemon.data.name,
        image: pokemon.data.sprites.front_shiny,
        types: pokemon.data.types,
        id: pokemon.data.id,
      };
    });
    console.log(pokemonPakage);
    setPokemonList(pokemonPakage);
    setIsLoading(false);
  }

  useEffect(() => {
    PokemonFetchedList();
  }, []);

  return (
    <div className="pokemon-list">
      {isLoading
        ? "Loading..."
        : pokemonList.map((pokemon) => (
            <Pokemon
              name={pokemon.name}
              image={pokemon.image}
              id={pokemon.id}
            />
          ))}
    </div>
  );
}

export default PokemonList;
