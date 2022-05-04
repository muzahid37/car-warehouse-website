import React from "react";

const CarDetails = ({ carDetail }) => {
  const { _id, name, image, description, price } = carDetail;
  // console.log(name);
  return (
    
      <div className="card-group col-4 mt-1">
        <div className="card">
          <img src={image} className='card-img-top' alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">{price}</small>
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default CarDetails;
