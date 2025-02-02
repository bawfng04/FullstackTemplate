import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";
import { exampleAPI } from "./apis";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{routes}</Routes>
        <p>API URL: {exampleAPI}</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
