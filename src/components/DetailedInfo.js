import React from "react";

function DetailedInfo({ user }) {
  return (
    <div className="details-wrapper">
      <h3>INFO:</h3>
      <img src={user.picture.large} alt="img"></img>
      <span>{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</span>
      <span>{`Gender: ${user.gender}`}</span>
      <h3>LOCATION:</h3>
      <span>{`City: ${user.location.city}`}</span>
      <span>{`Country: ${user.location.country}`}</span>
      <span>{`Post Code: ${user.location.postcode}`}</span>
      <h3>LOGIN:</h3>
      <span>{`Username: ${user.login.username}`}</span>
      <span>{`Password: ${user.login.password}`}</span>
      <h3>CONTACT:</h3>
      <span>{`Email: ${user.email}`}</span>
      <span>{`Cell: ${user.cell}`}</span>
      <span>{`Phone: ${user.phone}`}</span>
    </div>
  );
}

export default DetailedInfo;
