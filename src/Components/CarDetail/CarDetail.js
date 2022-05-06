import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarDetail = () => {
  const { carDetailId } = useParams();
  const [carDetail, setCarDetail] = useState({});
  useEffect(() => {
    const url=(`http://localhost:5000/inventory/${carDetailId}`)
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarDetail(data));
  }, []);
  return (
    <div className="container">
      <h2>this is car detail page</h2>
      
      <div className="card-group mt-1">
        <div className="card">
          <img src={carDetail.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{carDetail.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">{carDetail.price}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
