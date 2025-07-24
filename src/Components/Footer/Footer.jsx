import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="bg-dark-blue">
          <div className="container">
            <div className="row  text-white text-center py-5">
              <div className="col-md-4 py-5">
                <div>
                  <h3 className="text-uppercase">LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4 py-5">
                <div>
                  <h3 className="text-uppercase">AROUND THE WEB</h3>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <i className="fa-brands fa-facebook text-white p-2 border border-1 border-white rounded-circle w-auto"></i>
                    <i className="fa-brands fa-twitter text-white p-2 border border-1 border-white rounded-circle w-auto"></i>
                    <i className="fa-brands fa-linkedin-in text-white p-2 border border-1 border-white rounded-circle w-auto"></i>
                    <i className="fa-solid fa-globe text-white p-2 border border-1 border-white rounded-circle w-auto"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-5">
                <div>
                  <h3 className="text-uppercase">ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-dark-grey text-white text-center py-3">
          <p className="m-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
