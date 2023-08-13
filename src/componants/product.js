import React from "react";
import "./product.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const Product = (props) => {
  const [value, setValue] = React.useState(2);
  return (
    <div id="product" on>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-share"></i>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.disc}</p>
      <h2>{props.price}</h2>
      <Box>
        <Rating
          name="simple-controlled"
          value={value}
          color="error"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <button class="button-card">SHOP NOW</button>
    </div>
  );
};

export default Product;
