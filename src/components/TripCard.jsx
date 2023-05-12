import React from "react";
import { ImHeart } from "react-icons/im";
import { useState } from "react";
import StarsRating from "./StarsRating";
const TripCard = ({ trip }) => {
  const { image, category, title, totalDays, rating, totalReviews, price } =
    trip;
  const [isHeartIconClicked, setIsHeartIconClicked] = useState(false);
  const handleHeartIconClick = () => {
    setIsHeartIconClicked(true);
  };
  return (
    <div className="trip-card">
      <div className="trip-card-img-wrapper">
        <img className="trip-card-img" src={image} alt="tirp-card-img" />
        <ImHeart
          className="heart-icon"
          onClick={handleHeartIconClick}
          style={{
            color: `${isHeartIconClicked ? "red" : ""}`,
          }}
        />
         <ImHeart
          className="small-heart-icon"
          onClick={handleHeartIconClick}
          style={{
            color: `${isHeartIconClicked ? "red" : ""}`,
          }}
        />
      </div>
      <div className="trip-card-intro">
        <p className="trip-card-category">{category}</p>
        <p className="trip-card-title">{title}</p>
        <p className="trip-card-total-days">{totalDays} days</p>
        <button className="trip-card-btn">Book Now</button>
        <StarsRating rating={rating} totalReviews={totalReviews} />
        <p className="trip-card-price">
          From Rs.{price} <span className="per-person">per person</span>
        </p>
      </div>
    </div>
  );
};

export default TripCard;

TripCard.defaultProps = {
  trip: {
    id: 0,
    category: "Adventure",
    title: "Langtang Trek",
    description:
      "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
    totalDays: 14,
    image:
      "https://sealinkstravel.com/wp-content/uploads/2020/02/him-compressor.jpg",
    rating: {
      rate: 5,
      count: 120,
    },
    totalReviews: 150,
    price: 50000.0,
    feature: true,
  },
};
