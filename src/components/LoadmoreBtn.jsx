import React from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

const LoadmoreBtn = ({ ifMoreContain }) => {
  const arrowIcon = ifMoreContain ? (
    <button className="loadmore-btn ">
      Load more{<FiChevronsDown className="loadmore-icon" />}
    </button>
  ) : (
    <button className="loadmore-btn">
      Load more{<FiChevronsUp className="loadmore-icon" />}
    </button>
  );
  return arrowIcon;
};

export default LoadmoreBtn;

LoadmoreBtn.defaultProps = {
  ifMoreContain: true,
};
