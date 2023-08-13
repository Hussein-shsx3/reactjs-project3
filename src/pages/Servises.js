import React from "react";

const Servises = () => {
  return (
    <div id="Page-5">
      <h1>
        our <span>services</span>
      </h1>
      <div className="services_cards">
        <div className="services_box">
          <i className="fa-solid fa-truck-fast"></i>
          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div className="services_box">
          <i className="fa-solid fa-rotate-left"></i>
          <h3>10 Days Replacement</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div className="services_box">
          <i className="fa-solid fa-headset"></i>
          <h3>24 x 7 Support</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div id="Sign-page">
        <img src="./img/logshoes.png" alt="" />
        <div className="right">
          <h1>Welcome Back!</h1>
          <form action="#">
            <p>User Name</p>
            <div className="user">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="user"
                placeholder="User Name"
                className="username"
              />
            </div>
            <p className="passworg_tag">Password</p>
            <div className="password">
              <i className="fa-solid fa-lock"></i>
              <input type="text" name="password" placeholder="Password" />
            </div>

            <p className="forget">Forget Password ?</p>

            <button type="submit">Login</button>
            <div className="loging_icon">
              <a href="/">
                <img src="./img/google.png" alt="" className="img-web" />
              </a>
              <a href="/">
                <img src="./img/facebook.png" alt="" className="img-web" />
              </a>
              <a href="/">
                <img src="./img/twitter.png" alt="" className="img-web" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Servises;
