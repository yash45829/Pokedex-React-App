import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
function PokemonDetails() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);

  async function download() {
    console.log(id);
    const urlById = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(urlById);

    const pokemonData = await response.data;
    console.log(pokemonData);

    const p = {
      name: pokemonData.name,
      image: pokemonData.sprites.front_shiny,
      types: pokemonData.types,
      id: pokemonData.id,
      weight: pokemonData.weight,
      height: pokemonData.height,
    };
    setPokemon(p);
  }
 
  console.log(pokemon);

  useEffect(() => {
    download();
  }, []);

  return (
    <>
      {pokemon !== null && (
        <div className="pokemon-detail-page">
          <h1>{pokemon.name}</h1>
          <img
            className="image"
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`}
            alt="image"
            srcSet={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
          <p>weight : {pokemon.weight}</p>
          <p>height : {pokemon.height}</p>
          {pokemon.types.map((t) => (
            <div> {t.type.name} </div>
          ))}
        </div>
      )}
    </>
  );
}
export default PokemonDetails;
