import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Nav/NavBar.jsx";
import Home from "./Home/Home.jsx";
import FoodCard from "./FoodCard/FoodCard.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-recipe" element={<FoodCard />} />
        <Route path="/sign-out" element={<h1 className="signOut">You've Signed Out</h1>} />
      </Routes>
      <footer>
      <a href="https://www.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_6216945.htm#query=food%20background&position=1&from_view=keyword&track=ais&uuid=a77b1256-21b4-466e-8b28-28b09114a958">Image by valeria_aksakova</a> on Freepik
      </footer>
    </div>
  );
}

export default App;


