import React from "react";
import Header from "./componants/header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Review from "./pages/Review";
import Servises from "./pages/Servises";
import Footer from "./componants/footer";
const App = () => {
  return (
    <div id="App">
      <Header />
      <Home />
      <Products />
      <About />
      <Review />
      <Servises />
      <Footer />
    </div>
  );
};

export default App;
