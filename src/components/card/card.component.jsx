import React from "react";

const Card = ({ mangaToon }) => {
  const { image_url, name } = mangaToon;

  return (
    <div className="card">
      <img src={image_url} alt={name} />
      <p className="manga-name">{name}</p>
    </div>
  );
};

export default Card;
