import React from "react";
import Card from "../card/card.component";

const CardList = ({ mangaList }) => {
  return (
    <div className="card-wrapper">
      {mangaList.map((manga) => (
        <Card key={manga.mal_id} mangaToon={manga} />
      ))}
    </div>
  );
};

export default CardList;
