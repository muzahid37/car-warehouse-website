import React from "react";
import './BannerBord.css'

const BannerBord = () => {
  return (
    <div>
      <div className="container  mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-15">
            <img className="img-fluid" src="https://i.ibb.co/sjtXgxt/car-1-1.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6  col-sm-12 banner_bord_right ">
            <h1>World largest automotive marketplace.</h1>
            <div className="row banner_bord_right_content">
              <div className="col-6">
                <div className="div">
                  <h4>Best Collection</h4>
                  <p>We have best Collection of car . So you can buy your favrite car </p>
                </div>
                <div className="div">
                  <h4>Best Pricing</h4>
                  <p>We are provide you price.  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="div">
                  <h4>Famous Brands</h4>
                  <p>All Famous Branded car you have buy from us  </p>
                </div>
                <div className="div">
                  <h4>Best Ratings</h4>
                  <p>We have </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBord;
