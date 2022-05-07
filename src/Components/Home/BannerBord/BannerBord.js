import React from "react";

const BannerBord = () => {
  return (
    <div>
      <div className="container bg-danger">
        <div className="row">
          <div className="col-6 col-sm-15">
            <img src="https://i.ibb.co/mRGFrGP/car-1.png" alt="" />
          </div>
          <div className="col-6  col-sm-12 ">
            <h1>World largest automotive marketplace.</h1>
            <div className="row">
              <div className="col-6">
                <div className="div">
                  <h4>Best Collection</h4>
                  <p>We have </p>
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBord;
