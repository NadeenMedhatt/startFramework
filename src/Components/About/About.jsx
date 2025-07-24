import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <section className=" bg-mint-green py-5 d-flex justify-content-center align-items-center">
        <div className="container py-5">
          <div className="text-center text-white  py-5">
            <div className="text-white text-center my-5">
              <h1 className="text-uppercase heading-style">about component</h1>
              <div className="my-2 heading-icon position-relative z-1">
                <i className="fa-solid fa-star mx-3 green-box"></i>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-md-6">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
