import "./Search.css";
import useDebounce from "../../hooks/useDebounce";
function Search({ updateSearchTerm }) {
  const useDebounceHook = useDebounce((e) => updateSearchTerm(e.target.value));
  return (
    <>
      <input
        type="text"
        name=""
        placeholder="pokemon.."
        onChange={useDebounceHook}
      />
    </>
  );
}
export default Search;
