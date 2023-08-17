import "./Pokemon.css";

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h1>{props.name}</h1>
      <img
        className="image"
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`}
        alt="image"
        srcSet={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
      />
    </div>
  );
}

export default Pokemon;
