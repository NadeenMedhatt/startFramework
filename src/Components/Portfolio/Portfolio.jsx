import React, { useEffect } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
export default function Portfolio() {
   useEffect(() => {
       document.title = "Portfolio";
     }, []);
  return (
    <>
      <section className="pt-2">
        <div className="container">
          <div className="text-dark-blue text-center my-5">
            <h1 className="text-uppercase heading-style">
              portfolio component
            </h1>
            <div className="my-2 heading-icon position-relative z-1">
              <i className="fa-solid fa-star mx-3 white-box"></i>
            </div>
          </div>
          <div className="row mb-3 g-5">
            <div className="col-md-4 ">
              <div className="portfolio-img position-relative rounded-4 overflow-hidden">
                <img src={port1} className="w-100 d-block " alt="" />
                <div className="overlay d-flex justify-content-center align-items-center text-white ">
                  <i className="fa-solid fa-plus display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="portfolio-img position-relative rounded-4 overflow-hidden">
                <img src={port2} className="w-100 d-block " alt="" />
                <div className="overlay d-flex justify-content-center align-items-center text-white ">
                  <i className="fa-solid fa-plus display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="portfolio-img position-relative rounded-4 overflow-hidden">
                <img src={port3} className="w-100 d-block " alt="" />
                <div className="overlay d-flex justify-content-center align-items-center text-white ">
                  <i className="fa-solid fa-plus display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="portfolio-img position-relative rounded-4 overflow-hidden">
                <img src={port1} className="w-100 d-block " alt="" />
                <div className="overlay d-flex justify-content-center align-items-center text-white ">
                  <i className="fa-solid fa-plus display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="portfolio-img position-relative rounded-4 overflow-hidden">
                <img src={port2} className="w-100 d-block " alt="" />
                <div className="overlay d-flex justify-content-center align-items-center text-white ">
                  <i className="fa-solid fa-plus display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="portfolio-img position-relative rounded-4 overflow-hidden">
                <img src={port3} className="w-100 d-block " alt="" />
                <div className="overlay d-flex justify-content-center align-items-center text-white ">
                  <i className="fa-solid fa-plus display-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
