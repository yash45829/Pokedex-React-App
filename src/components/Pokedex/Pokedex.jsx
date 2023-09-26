import { useState } from "react";
// css 
import "./Pokedex.css";
// components 
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="head">
      <Search updateSearchTerm={setSearchTerm} />
      <div>
        {!searchTerm ? (
          <PokemonList />
        ) : (
          <PokemonDetails key={searchTerm} name={searchTerm} />
        )}
      </div>
    </div>
  );
}

export default Pokedex;
