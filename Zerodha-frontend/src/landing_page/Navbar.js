import React from "react";
import styels from "./Navbar.module.css";
function Navbar() {
  return (
    <div className="mb-5">
      <div className="row">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
          <div className={`container-fluid p-2  ${styels.nav}`}>
            <a class="navbar-brand" href="/">
              <img
                src="media/images/logo.svg"
                alt=""
                style={{
                  width: "30%",
                  height: "30%",
                  alignItems: "center",
                  placeItems: "center",
                  justifyContent: "center",
                }}
              ></img>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class={`navbar-nav me-auto mb-2 mb-lg-0  ${styels.icons}`}>
                {/* Signup  */}
                <li class="nav-item active mx-2">
                  <a class="nav-link " aria-current="page" href="/signup">
                    Signup
                  </a>
                </li>
                {/* About  */}
                <li class="nav-item active mx-2">
                  <a class="nav-link" href="/about">
                    About{" "}
                  </a>
                </li>
                {/* Products */}
                <li class="nav-item active mx-2">
                  <a class="nav-link" href="/products">
                    Products
                  </a>
                </li>
                {/* Pricing */}
                <li class="nav-item active mx-2">
                  <a class="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                {/* Support */}
                <li class="nav-item active mx-2">
                  <a class="nav-link" href="/support">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
