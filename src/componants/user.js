import React from "react";
import "./user.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const User = (props) => {
  return (
    <div id="user-info">
      <div id="user-img">
        <img src={props.img} alt="" />
        <div>
          <h3>{props.name}</h3>
          <Stack spacing={1}>
            <Rating name="size-small" defaultValue={props.star} size="small"  readOnly />
          </Stack>
        </div>
      </div>
      <p>{props.disc}</p>
    </div>
  );
};

export default User;
