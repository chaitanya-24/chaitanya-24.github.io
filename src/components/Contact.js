import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3i5la44",
        "template_8mxvrcs",
        form.current,
        "user_3mcbEVgXohft2xMWLcxH2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <main className="container">
        <section className="row">
          <h1 className="main-head">
            Contact&nbsp;<i class="fas fa-envelope"></i>
          </h1>
          <div className="left-side-contact col-12 col-lg-5">
            <img
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
              data-aos-once="true"
              src={process.env.PUBLIC_URL + "/images/contactImg.svg"}
              alt="ContactImg"
            />
          </div>
          <div className="right-side-contact col-12 col-lg-7 d-flex justify-content-center">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-12 col-lg-12 contact-input-field">
                  <input
                    type="name"
                    name="name"
                    id=""
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="col-12 col-lg-12 contact-input-field">
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12 col-lg-12 contact-input-field">
                  <input
                    type="text"
                    name="subject"
                    id=""
                    className="form-control"
                    placeholder="subject"
                  />
                </div>
                <div className="col-12 col-lg-12 contact-input-field">
                  <textarea
                    className="form-control"
                    placeholder="Enter Your Message"
                    name="message"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-success btn-style w-100">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
