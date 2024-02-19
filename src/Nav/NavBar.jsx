import { Link } from "react-router-dom";
import './NavBar.css'


function Navbar() {
  return (
    <nav>
      <div>
    <Link to = "/">Home</Link>
    <Link to = "/find-recipe">Find Recipe</Link>
    </div>
    <div>
    <Link to = "/sign-out">Sign Out</Link>
    </div>
    </nav>
  )
}

export default Navbar