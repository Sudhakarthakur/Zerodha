import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className="border-top mt-5">
      <div className="row ms-5 mt-5" style={{}}>
        <div className="col-lg-2 col-md-12 col-sm-12 mb-4">
          <img
            src="media/images/logo.svg"
            alt="FooterLogo"
            style={{ width: "60%", marginBottom: "1rem" }}
          ></img>
          <p className="fs-5">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>
        <div className="col-lg-1"></div>

        <div
          className="col-lg-9 col-md-12 col-sm-12 "
          //  style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   textAlign: "center",
          // }}
        >
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h2 className={styles.h1}>Account</h2>
              <a href="/" className={styles.a}>
                Open demat account
              </a>
              <br />
              <a href="/" className={styles.a}>
                Minor demat account
              </a>
              <br />
              <a href="/" className={styles.a}>
                NRI demat account
              </a>
              <br />
              <a href="/" className={styles.a}>
                Commodity
              </a>
              <br />
              <a href="/" className={styles.a}>
                Dematerialisation
              </a>
              <br />
              <a href="/" className={styles.a}>
                Fund transfer
              </a>
              <br />
              <a href="/" className={styles.a}>
                MTF
              </a>
              <br />

              <a href="/" className={styles.a}>
                Referral program
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              {" "}
              <h2 className={styles.h1}>Support</h2>
              <a href="/" className={styles.a}>
                Contact us
              </a>
              <br />
              <a href="/" className={styles.a}>
                Support portal
              </a>
              fffffff{" "}
              <a href="/" className={styles.a}>
                How to file a complaint?
              </a>
              <br />
              <a href="/" className={styles.a}>
                complaint?
              </a>
              <br />
              <a href="/" className={styles.a}>
                Status of your complaints
              </a>
              <br />
              <a href="/" className={styles.a}>
                Bulletin
              </a>
              <br />
              <a href="/" className={styles.a}>
                Circular
              </a>
              <br />
              <a href="/" className={styles.a}>
                Z-Connect blog
              </a>
              <br />
              <a href="/" className={styles.a}>
                Downloads
              </a>
              <br />
              <a href="/" className={styles.a}>
                Status of your
              </a>
              <br />
            </div>
            <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
              {" "}
              <h2 className={styles.h1}>Company</h2>
              <a href="/" className={styles.a}>
                {" "}
                About
              </a>
              <br />
              <a href="/" className={styles.a}>
                Philosophy
              </a>
              <br />
              <a href="/" className={styles.a}>
                Press & media
              </a>
              <br />
              <a href="/" className={styles.a}>
                Careers
              </a>
              <br />
              <a href="/" className={styles.a}>
                Zerodha Cares (CSR)
              </a>
              <br />
              <a href="/" className={styles.a}>
                Zerodha.tech
              </a>
              <br />
              <a href="/" className={styles.a}>
                Open source
              </a>
              <br />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              {" "}
              <h2 className={styles.h1}>Quick links</h2>
              <a href="/" className={styles.a}>
                Upcoming IPOs
              </a>
              <br />
              <a href="/" className={styles.a}>
                Brokerage charges
              </a>
              <br />
              <a href="/" className={styles.a}>
                Market holidays
              </a>
              <br />
              <a href="/" className={styles.a}>
                Economic calendar
              </a>
              <br />
              <a href="/" className={styles.a}>
                Calculators
              </a>
              <br />
              <a href="/" className={styles.a}>
                Markets
              </a>
              <br />
              <a href="/" className={styles.a}>
                Sectors
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
