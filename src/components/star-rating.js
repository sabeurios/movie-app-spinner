import React from "./node_modules/react";

const StarRating = (props) => {
  const { rate,change, size } = props;
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      star.push(<span  onClick={()=>change(i+1)}>★</span>);
    } else {
      star.push(<span onClick={()=>change(i+1)}>☆</span>);
    }
  }
  return <div className="search-stars" style={{fontSize: size}}>{star}</div>;
};
export default StarRating;
