import React from "react";
import "./Styles.css";

import Headerlogo from "../../../assets/images/headerlogo.png";

const Index = () => {
  return (
    <footer class="footer">
      <div class="container pt-5">
        <div class="row py-4">
          <div class="col-lg-1 col-md-6"></div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 logmed">
            <img src={Headerlogo} alt="" width="180" class="mb-3" />
            <p class="font-italic txt-muted mt-3 mb-0">Connect with us</p>
            <div className="mt-2 w-50">
              <ul class="list-inline d-flex justify-content-between socmedia">
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 footlinks">
            <h6 class="mb-4 txt-blue linkhead">Company</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  For Women
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  For Men
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Stores
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Our Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 footlinks">
            <h6 class="mb-4 txt-blue linkhead">Useful Links</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Login
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Register
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Wishlist
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Our Products
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 footlinks">
            <h6 class="mb-4 txt-blue linkhead">Important Links</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Login
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Register
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Wishlist
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="txt-muted">
                  Our Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
