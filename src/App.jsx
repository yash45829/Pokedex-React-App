import { Link } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./Routes/CustomRoutes";

function App() {
  return (
    <div className="head">
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <h1 className="main-title">
          Pokedex- <span>A Pokemon World</span>
        </h1>
      </Link>
      <CustomRoutes />
    </div>
  );
}

export default App;
