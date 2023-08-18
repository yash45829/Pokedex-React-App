import "./Pokemon.css";
import { Link } from "react-router-dom";
function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${props.id}`} style={{ textDecoration: "none" }}>
        <h1 className="name">{props.name}</h1>
        <img
          className="image"
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`}
          alt="image"
          srcSet={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
        />
      </Link>
    </div>
  );
}

export default Pokemon;
