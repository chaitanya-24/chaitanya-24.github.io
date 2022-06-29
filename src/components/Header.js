import React from "react";

const Header = () => {
  return (
    <>  
      <header className="head container-fluid">
        <div className="row d-flex justify-content-center">
          <section data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true" className="left-side-head col-12 col-lg-5">
            <h1 className="head-name">Chaitanya Sawant</h1>
            <p className="head-para">
              I am a Full Stack Developer with experience in building projects and an Open Source Contributor I am
              fond of developing web application. 
            </p>

            <section className="socials">
              <a href="https://www.linkedin.com/in/chaitanya-sawant-691799187/" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/chaitanyasawnt" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-twitter"></i>
              </a>
              <a href="https://github.com/chaitanya-24" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/chaitanya42_/" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-instagram"></i>
              </a>
            </section>
          </section>
          <section
            data-aos="fade-up-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="right-side-head col-12 col-lg-5"
          >
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/images/headerImg.svg"}
              alt="headerImage"
            />
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
