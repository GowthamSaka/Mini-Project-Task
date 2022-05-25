import { Link } from "react-router-dom";
import React from "react";
import './index.css'

function Home() {
  return (
    <div>
      <div className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g8-ytnyzRjwlKSDIj-_MdbQbTxR_Z--XvfyIdeC4ta3PSb5ebPx60Em-ubGEbr9oRH0&usqp=CAU" 
        alt="Spinebiz" className="spinebiz-image" />
        <ul className="list-items">
        <li className="items"><Link to="/login">Login</Link></li>
        <li className="items"><Link to="/registration">Registration</Link></li>
        <li className="items"><Link to="/rows">Rows</Link></li>
        {/* <li className="items"><Link to="/tech">AddRows</Link></li>
        <li className="items"><Link to="/search">Search</Link></li> */}
        </ul>
      </div>
      <div className="body-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGGpUfjIl6aIAXstmdcXieZtawlZJbLeztg&usqp=CAU" className="bg-image img-fluid" alt="employee"/>
        <div className="content">
          <h1>Spinebiz</h1>
          <p>Connecting the people</p>
          <p>Spinebiz is headquartered in Singapore with delivery centres<br></br> in Chennai and Bangalore and offices in the US, and UK.<br></br>
          Since being founded in 2013 Spinebiz has grown significantly over the years <br></br>and has served clients across 178 locations in 74 countries over the world.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;