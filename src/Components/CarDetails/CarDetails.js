import React from "react";
import { useNavigate } from "react-router-dom";

const CarDetails = ({ carDetail }) => {
  const { _id, name, image, description, price } = carDetail;

  const navigate=useNavigate();

  const navigateToCarDetail=id=>{
    // navigate(`/inventory/${id}`)
    console.log('id')
  
  }
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
            <p className="card-text d-flex justify-content-between rounded">
          <small className="text-muted">{price}</small>
          <button onClick={()=>navigateToCarDetail(_id)} className="btn-primary border-0 ">See details</button>
        </p>
          </div>
        </div>
      </div>
    
  );
};

export default CarDetails;
