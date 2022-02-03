import React from "react";

const Work = () => {
  return (
    <>
      <section
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
        data-aos-once="true"
        className="container"
      >
        <h1 className="main-head">
          Tech Stack&nbsp; <i class="fas fa-tools"></i>
        </h1>
        <main className="row justify-content-center  tool-section">
          <span
            data-cooltipz-dir="left"
            aria-label="HTML5"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-html5"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="CSS3"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-css3"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="JAVASCRIPT"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-js-square"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="REACT"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-react"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="JAVA"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-java"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="PYTHON"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-python"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="FIGMA"
            className="col-4 col-lg-2"
          >
            <i class="social-icon fab fa-figma work-icon"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="Node JS"
            className="col-4 col-lg-2"
          >
            <i class="social-icon fab fa-node work-icon"></i>
          </span>
        </main>
      </section>
    </>
  );
};

export default Work;
