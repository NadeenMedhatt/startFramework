import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="text-dark-blue text-center my-5">
            <h1 className="text-uppercase heading-style">conatct section</h1>
            <div className="my-2 heading-icon position-relative z-1">
              <i className="fa-solid fa-star mx-3 white-box"></i>
            </div>
          </div>
          <form action="#" className="w-50 mx-auto contact-form d-flex justify-content-center align-items-start flex-column gap-4">
            <input
              type="text"
              className="form-control border-0 border-bottom mb-3"
              id="userNameInput"
              name="userName"
              placeholder="userName"
            />
            <input
              type="text"
              className="form-control border-0 border-bottom mb-3"
              id="userAgeInput"
              name="userAge"
              placeholder="userAge"
            />
            <input
              type="email"
              className="form-control border-0 border-bottom mb-3"
              id="userEmailInput"
              name="userEmail"
              placeholder="userEmail"
            />
            <input
              type="password"
              className="form-control border-0 border-bottom mb-3"
              id="userPasswordInput"
              name="userPassword"
              placeholder="userPassword"
            />
            <button className="btn bg-mint-green text-white">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
