import React from "react";
import "../index.css";
const Home = () => {
  return (
    <div id="Page-1">
      <div id="logo">
        <h1 id="Nike">NIKE</h1>
        <h1>Collecttion</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          voluptatibus, placeat officia distinctio, accusamus accusantium
          necessitatibus voluptatem, quasi eveniet ipsum deserunt! Non delectus
          deserunt voluptate suscipit consectetur. Fugit, fuga asperiores.
        </p>
        <button class="button">SHOP NOW</button>
      </div>
      <img src="./img/shoes.png" alt="" />
      <div id="S-icons">
        <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="/"><i class="fa-brands fa-twitter"></i></a>
        <a href="/"><i class="fa-brands fa-instagram"></i></a>
        <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  );
};

export default Home;
