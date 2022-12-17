import Main from "./Components/Main/Main";
import "./App.css";
import { useState } from "react";

function App() {
  const [ordenarLetra, setOrdenarLetra] = useState();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
