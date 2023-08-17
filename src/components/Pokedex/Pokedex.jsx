import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";

function Pokedex() {
  return (
    <div className="head">
      <h1>Pokedex:A Pokemon World</h1>
      <Search />
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default Pokedex;
