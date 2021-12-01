import React from "react";
/* this is the component for footer. */
const Footer = () => {
  return (
    <footer className=" bg-dark text-white page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Bangla Bikers</h5>
            <h6 className="text-success">About Us!</h6>
            <p>
              A bad day on a mountain bike always beats a good day in the
              office. If you want to be happy for a day, if you want to be happy
              for a year, Marry. If you want to be happy for a lifetime, Ride a
              Bike.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase mb-5">Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-tumblr"></i> Tumblr
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 ">
            <h5 className="text-uppercase mb-5">Contact Us!</h5>
            <ul className="list-unstyled">
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fas fa-phone"></i> (+880)1647849152
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fas fa-at"></i> Email
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-wpforms"></i> Webforms
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-weixin"></i> Webchat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2021 Copyright:
        <h6>Md. Walid Bin Jashim</h6>
      </div>
    </footer>
  );
};

export default Footer;
