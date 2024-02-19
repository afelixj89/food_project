import "./App.css";
import FindFood from "./Home/Home.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./Nav/NavBar.jsx";
import Home from "./Home/Home.jsx";

function App() {
  return (
    <div className="App">
      {/* <FindFood /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/find-recipe" element={<FoodCard />} /> */}
        <Route path="/sign-out" element={<h1 className="signOut">You've Signed Out</h1>} />
      </Routes>
      <footer>
      <a href="https://www.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_6216945.htm#query=food%20background&position=1&from_view=keyword&track=ais&uuid=a77b1256-21b4-466e-8b28-28b09114a958">Image by valeria_aksakova</a> on Freepik
      </footer>
    </div>
  );
}

export default App;

// Really cool styling

// style={{
//   fontSize: "2em",
//   color: "white",
//   textAlign: "center",
//   background: "linear-gradient(to right, #ff00cc, #333399)",
//   padding: "20px",
//   borderRadius: "10px",
//   animation: "glow 1.5s infinite alternate",
//   textShadow:
//     "0 0 20px #fff, 0 0 30px #ff00cc, 0 0 40px #ff00cc, 0 0 50px #ff00cc, 0 0 60px #ff00cc, 0 0 70px #ff00cc, 0 0 80px #ff00cc",
// }}
