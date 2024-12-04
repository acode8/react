import React from "react";

const Collections = (props) => {
  const { title, image1, image2, image3, image4 } = props.gentsFashion;

  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className="menImages">
        <img src={image1} alt={`${title} 1`} />
        <img src={image2} alt={`${title} 2`} />
        <img src={image3} alt={`${title} 3`} />
        <img src={image4} alt={`${title} 4`} />
      </div>
    </div>
  );
};

export default Collections;
