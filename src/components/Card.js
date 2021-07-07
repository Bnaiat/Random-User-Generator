import React from "react";

function Card({ user, setUserDetails }) {
  const date = new Date(user.dob.date);
  const formatDate = new Intl.DateTimeFormat("en-US").format(date);

  const clickHandler = () => {
    setUserDetails(user);
  };

  return (
    <div className="card-wrapper" id={user.cell}>
      <img src={user.picture.medium} alt="img"></img>
      <span>{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</span>
      <span>{`Email: ${user.email}`}</span>
      <span>{`City: ${user.location.city}`}</span>
      <span>{`Age: ${user.dob.age}`}</span>
      <span>{`DOB: ${formatDate}`}</span>
      <button onClick={clickHandler}>Show More</button>
    </div>
  );
}

export default Card;
