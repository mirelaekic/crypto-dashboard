import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="bg-text">
        <Link to="/crypto">
          <button className="enter">COIN</button>
        </Link>
      </div>
    </div>
  );
}
