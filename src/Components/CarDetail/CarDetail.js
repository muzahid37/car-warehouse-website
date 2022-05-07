import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CarDetail.css";

const CarDetail = () => {
  const { carDetailId } = useParams();
  const [carDetail, setCarDetail] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${carDetailId}`;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarDetail(data));
  }, []);
  return (
    <div className="container mb-5">
      <h5 className="mt-5 border-bottom pb-2">{carDetail.name}</h5>
      <div className="row">
        <div className="carDetail-left col-lg-6 mt-5 ">
          <img className="single-car-img" src={carDetail.image} alt="" />
        </div>
        <div className="carDetail-right col-lg-6 mt-5">
          <h2>{carDetail.name}</h2>
          <p className="text-dark">{carDetail.shortDescription}</p>
          <h4>Price:{carDetail.price}</h4>
          <h4>Quantity:{carDetail.quantity}</h4>
          <div className="carDetail-left-button mt-5 ">
          <button className="btn-primary border-0 ">Delivered</button>
          <button className="btn-primary border-0 restock-btn">Restock</button>
      
          </div>


        </div>
       

      </div>
    </div>
  );
};

export default CarDetail;
