import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="main">
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCwJBPLaAlN06nJov0ViMoAb7J-eQLTpvF5dUF2xJ4Pgn00YSab3c12Or18W5mowZY_4&usqp=CAU"
        alt="unsupportable on your system"
      /> */}
      <nav className="nav-bar">
        <h2>RentMe.</h2>

        <label for="Location">Location</label>
        <select name="Location" id="select">
          <option value="shahganj">shahganj</option>
          <option value="goharganj">goharganj</option>
          <option value="Rehti">Rehti</option>
          <option value="Mandideep">Mandideep</option>
        </select>

        <input
          id="input"
          type="text"
          name="search your product"
          placeholder="search your item"
        />

        <div class="components">
          <ul>
            <li id="cart">
              <a href=""> Cart </a>
            </li>
            <li id="login">
              <a href=""> Login </a> /
            </li>
            <li id="signup">
              <a href=""> Signup </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="home-section">
        {/* <div className="inner-home" id="front-image"> */}

        {/* </div> */}
        {/* 
        <h2>category</h2>

        <div className="parent-card-container">
          <div className="card">
            <h1>product</h1>
            <img className="image" src="images/pro.jpg" alt="" />
            <p className="price">5$</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Buy now</button>
          </div>

          <div className="card">
            <h1>product</h1>
            <img className="image" src="images/pro.jpg" alt="" />
            <p className="price">5$</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Buy now</button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default Home;




