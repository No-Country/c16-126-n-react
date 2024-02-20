import React from "react";

const RatingToStar = ({ rating }) => {
  const stars = "★★★★★"; // Cinco estrellas llenas
  const starsZero = "☆☆☆☆☆"; // Cinco estrellas vacías
  const starsMax = 5; // Valor máximo de calificación

  const starsFull = stars.slice(0, rating);
  const starsCount = starsZero.slice(0, starsMax - rating);

  return (
    <div className="flex mx-auto my-2  text-yellow-400 text-2xl">
      {starsFull}
      {starsCount} <span>({rating})</span>
    </div>
  );
};

export default RatingToStar;
