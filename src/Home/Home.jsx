import React from "react";
import './Home.css'


function Home() {
  return (
    <div>
     <h1 className="welcome"> Welcome to Recipe World!</h1>
     <div>
     <form>
            <h3 className="text">Login</h3>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"/> 
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"/>
            </div>
            <input className="button" type="submit" value="Submit"/>
        </form>

     </div>
    </div>
  );
}

export default Home;
