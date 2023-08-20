import { Link } from "react-router-dom";
import CustomRoutes from "./Routes/customRoutes";
// import Pokedex from "./components/Pokedex/Pokedex";
import './App.css'
// deps_temp_70a2e0d0

function App() {
  return (
    <div className="head">
    <Link to={`/`} style={{ textDecoration: "none" }}>
   <h1 className="main-title">Pokedex- <span>A Pokemon World</span></h1></Link>
      <CustomRoutes />
      
    </div>
  );
}

export default App;
