import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
