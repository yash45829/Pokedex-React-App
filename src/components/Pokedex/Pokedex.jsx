import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

function Pokedex (){
    return(
        <div className="head">
        Pokedex
        <Search/>
        <div><PokemonList/></div>
        
        </div>
    )
}

export default Pokedex;