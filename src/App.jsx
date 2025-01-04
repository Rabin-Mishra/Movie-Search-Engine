import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  //you can write any js code over here before the return statement
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App;
