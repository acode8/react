import React from 'react';

const WomenCollection = (props) => {
    const { title, image1, image2, image3, image4 } = props.ladiesFashion;

  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className='bannerSection'>
      <img src="https://plus.unsplash.com/premium_photo-1700824490081-d1d6a88c2076?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" alt="" />

    </div>

      <div className="womenImages">
        <img src={image1} alt={`${title} 1`} />
        <img src={image2} alt={`${title} 2`} />
        <img src={image3} alt={`${title} 3`} />
        <img src={image4} alt={`${title} 4`} />
      </div>
    </div>
  );
};

export default WomenCollection; // Ensure you are using default export
 