import React, { useEffect } from "react";
import avatar from "../../assets/avataaars.svg";
export default function Home() {
   useEffect(() => {
     document.title = "Home";
   }, []);
  return (
    <>
      <section className=" bg-mint-green py-4 w-100">
        <div className="container">
          <div className="text-center text-white">
            <img width="250px" src={avatar} alt="" />
            

            <div className="text-white text-center my-5">
              <h1 className="text-uppercase heading-style">start Framework</h1>
              <div className="my-2 heading-icon position-relative z-1">
                <i className="fa-solid fa-star mx-3 green-box"></i>
              </div>
            </div>
            <p className="m-0">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  );
}
