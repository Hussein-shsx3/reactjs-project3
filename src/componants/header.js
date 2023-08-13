import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  function m() {
    const nav = document.getElementById("res");
    nav.classList.add("act");
    document.getElementById("bar").style.display = "none";
  }
  function c() {
    const nav = document.getElementById("res");
    nav.classList.remove("act");
    document.getElementById("bar").style.display = "flex";
  }
  return (
    <header>
      <h1>
        Shose<u>s</u>
      </h1>
      <div id="res">
        <ul>
          <li>
            <a href="#Page-1">Home</a>
          </li>
          <li>
            <a href="#Page-2">Products</a>
          </li>
          <li>
            <a href="#Page-3">About</a>
          </li>
          <li>
            <a href="#Page-4">Review</a>
          </li>
          <li>
            <a href="#Page-5">Servises</a>
          </li>
        </ul>
        <div id="icons">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </div>
        <i class="fa-solid fa-xmark" onClick={c}></i>
      </div>
      <i id="bar" className="fas fa-outdent" onClick={m}></i>
    </header>
  );
};

export default Header;
