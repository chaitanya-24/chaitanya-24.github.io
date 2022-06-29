import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          class="navbar navbar-expand-lg navbar-light"
        >
          <div class="container">
            <Link class="active" aria-current="page" to="/">
              <a class="navbar-brand" href="#">
                &lt;CS /&gt;
              </a>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span
                className="menu"
                style={{ fontSize: "30px", color: "#fff" }}
              >
                {show ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="fas fa-bars"></i>
                )}
              </span>
            </button>
            <div class={` collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
