import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="app-content">
          <Routes>{routes}</Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
