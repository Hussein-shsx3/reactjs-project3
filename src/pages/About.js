import React from "react";

const About = () => {
  function a(){
    document.getElementById("img-5").src = "./img/red_shoes1.png";
  }
  function b(){
    document.getElementById("img-5").src = "./img/red_shoes2.png";
  }
  function c(){
    document.getElementById("img-5").src = "./img/red_shoes3.png";
  }
  function d(){
    document.getElementById("img-5").src = "./img/red_shoes4.png";
  }
  return (
    <div id="Page-3">
      <h1>WEB ABOUT</h1>
      <div id="About-img">
        <div id="imgs">
          <img src="./img/red_shoes1.png" alt="" id="img-1" onClick={a}/>
          <img src="./img/red_shoes2.png" alt="" id="img-2" onClick={b}/>
          <img src="./img/red_shoes3.png" alt="" id="img-3" onClick={c}/>
          <img src="./img/red_shoes4.png" alt="" id="img-4" onClick={d}/>
        </div>
        <div id="M-img">
          <img src="./img/red_shoes1.png" alt="" id="img-5"/>
        </div>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from " de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
      <button class="button2">SHOP NOW</button>
    </div>
  );
};

export default About;
