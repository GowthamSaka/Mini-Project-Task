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
        <li className="items"><Link to="/blogs">Registration</Link></li>
        <li className="items"><Link to="/tech">AddRows</Link></li>
        <li className="items"><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;