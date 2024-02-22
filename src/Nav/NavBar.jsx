import { Link } from "react-router-dom";
import './NavBar.css'


function Navbar() {
  return (
    <nav>
      <div>
    <Link id="navLinks" to = "/">Home</Link>
    <Link id="navLinks" to = "/find-recipe">Find Recipe</Link>
    </div>
    <div>
    <Link id="navLinks" to = "/sign-out">Sign Out</Link>
    </div>
    </nav>
  )
}

export default Navbar