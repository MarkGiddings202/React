import React from "react";
import Card from "./Card";

function Profile({ profileText, cardText, buttonText, handleClick }) {
  return (
    <div>
      <h1>{profileText}</h1>
      
      <Card
        cardText={cardText}
        buttonText={buttonText}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Profile;
