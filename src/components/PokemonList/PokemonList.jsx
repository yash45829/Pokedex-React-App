import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";

function PokemonList() {
  // state initialisation
  let [pokemonStates, setPokemonStates] = useState({
    pokemonList: [],
    isLoading: false,
    pokedexUrl: `https://pokeapi.co/api/v2/pokemon`,
    prevPokedexUrl: "",
    nextPokedexUrl: "",
  });

  async function PokemonFetchedList(url) {
    setPokemonStates((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      // console.log(url);
      const response = await axios.get(url);
      const list = await response.data;

      setPokemonStates((prevState) => ({
        ...prevState,
        nextPokedexUrl: list.next,
        prevPokedexUrl: list.previous,
      }));

      const result = response.data.results;
      // console.log(result);
      const listOfPokemonData = await result.map(
        async (pokemon) => await axios.get(pokemon.url)
      );
      const pokemonDataFetched = await axios.all(listOfPokemonData);
      // console.log(pokemonDataFetched);
      const pokemonPakage = pokemonDataFetched.map((pokemon) => {
        return {
          name: pokemon.data.name,
          image: pokemon.data.sprites.front_shiny,
          types: pokemon.data.types,
          id: pokemon.data.id,
        };
      });

      setPokemonStates((pokemonStates) => ({
        ...pokemonStates,
        pokemonList: pokemonPakage,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    PokemonFetchedList(pokemonStates.pokedexUrl);
    console.log(pokemonStates);
  }, [pokemonStates.pokedexUrl]);

  // useEffect(() => {
  //   console.log("Updated Pokemon States:", pokemonStates);
  // }, [pokemonStates]);

  return (
    <>
      <div className="pokemon-list">
        {pokemonStates.isLoading
          ? "Loading..."
          : pokemonStates.pokemonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                image={pokemon.image}
                id={pokemon.id}
                key={pokemon.id}
              />
            ))}
      </div>

      {/* buttons logic   */}
      {pokemonStates.isLoading ? (
        ""
      ) : (
        <div className="buttons">
          <button
            className="btn"
            disabled={pokemonStates.prevPokedexUrl == null}
            onClick={() => {
              setPokemonStates((prevState) => ({
                ...prevState,
                pokedexUrl: pokemonStates.prevPokedexUrl,
              }));
            }}
          >
            Previous
          </button>
          <button
            className="btn"
            onClick={() => {
              setPokemonStates((prevState) => ({
                ...prevState,
                pokedexUrl: pokemonStates.nextPokedexUrl,
              }));
            }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default PokemonList;
