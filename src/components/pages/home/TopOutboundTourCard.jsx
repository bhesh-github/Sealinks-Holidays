import React from "react";

const TopOutboundTourCard = ({ tour }) => {
  const { imgUrl, placeName } = tour;
  return (
     <div className="top-outbound-tour-card" >
      <img className="top-outbound-tour-card-img" src={imgUrl} />
      <p className="top-outbound-tour-card-place-name">{placeName}</p>
    </div>
  );
};
export default TopOutboundTourCard;

TopOutboundTourCard.defaultProps = {
  outboundTours: {
    id: 0,
    imgUrl:
      "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    placeName: "Indonesia",
  },
};
