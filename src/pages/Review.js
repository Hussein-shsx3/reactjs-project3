import React from 'react';
import User from '../componants/user';
import { Data1 } from '../componants/Data';
const Review = () => {
  const dataShow1 = Data1.map((el) => (
    <User img={el.img} name={el.name} disc={el.disc} star={el.star}/>
  ));
  return (
    <div id="Page-4">
      <h1>CUSTOMER'S <span>REVIEW</span></h1>
      <div id="users">
        {dataShow1}
      </div>
    </div>
  );
}

export default Review;
