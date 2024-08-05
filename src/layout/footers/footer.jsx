import React from "react";
import Link from "next/link";
import Image from "next/image";

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/footer-logo.png";
import payment_img from "@assets/img/others/payment-icon.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from "@/src/svg/email-aeroplan";
import SocialLinks, { CopyRight } from "@/src/common/social-links";

const footer_content = {
  contact_us: (
    <>
      {" "}
      Write us at : <span>sales@spectram promocabletvservices.com</span>
    </>
  ),
  mail: "sales@spectram promocabletvservices.com",
  contact_text: "Call for Consultation!",
  phone: "+12818823471",
  info: <>Spectram Promo LLC</>,
  map: "",
  address: (
    <>
      Mail us at: 4-08 Bergen Ave, Fair Lawn, NJ 07410
      <br />
    </>
  ),
  mail_2: "sales@spectram promocabletvservices.com",
  mail_phone: (
    <>
      {" "}
      Write us at : sales@spectram promocabletvservices.com
      <br />
      Call us at : +12818823471
    </>
  ),

  service_links: [
    "Parking permission",
    "Fire Service Noc",
    "Report a Parking Violation",
    "Residential Parking",
    "Vendor Registration",
    "City Board Applications",
  ],
};
const {
  contact_us,
  mail,
  contact_text,
  phone,
  info,
  map,
  address,
  mail_2,
  mail_phone,
  service_links,
} = footer_content;

const Footer = () => {
  return (
    <>
      <footer className="tp-footer-area p-relative">
        <div
          className="tp-footer-bg"
          style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}
        ></div>
        <div
          className="tp-footer-top-shape"
          style={{
            backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`,
          }}
        ></div>

        <div className="container container-large">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-top-area">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="tp-footer-top-contact">
                      <a href="mailto:sales@spectram promocabletvservices.com">
                        {contact_us}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                      <div className="tp-footer-top-right-headphone">
                        <Image src={headphone} alt="theme-pure" />
                      </div>
                      <div className="tp-footer-top-right-content">
                        <p>{contact_text}</p>

                        <a href="tel:+12818823471">+1 (281) 882-3471</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-footer-main-area">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-1">
                  <div className="tp-footer-logo">
                    <a href="/">
                    <Link href="/">
                       <p style={{fontSize: "25px", fontWeight: "700", width: "200px", color: "white"}}>Spectram Promo</p>
                      </Link>
                    </a>
                  </div>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-info">
                      <p>{info}</p>
                      <div className="tp-footer-main-location">
                        <a target="_blank" href={map}>
                          {" "}
                          <i className="fa-sharp fa-light fa-location-dot"></i>
                          {address}
                        </a>
                      </div>
                      <div className="tp-footer-main-mail">
                        <a href={`mailto:${mail_2}`}>
                          <i className="fa-light fa-message-dots"></i>
                          {mail_phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6"></div>
              <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="tp-footer-widget tp-footer-col-4">
                  <h3 className="tp-footer-widget-title">Newsletter</h3>
                  <div className="tp-footer-from">
                    <div className="tp-footer-text-email p-relative">
                      <input type="text" placeholder="Enter Email Address" />
                      <span>
                        <EmailAeroplan />
                      </span>
                    </div>
                    <div className="tp-footer-form-check">
                      <input
                        className="form-check-input"
                        id="flexCheckChecked"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        I agree to all your terms and policies
                      </label>
                    </div>
                    <div className="tp-footer-widget-social">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <Image src={payment_img} alt="theme-pure" width={400} height={80} />
          </div>

          <div className="tp-footer-copyright-area p-relative">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner">
                  <p>
                    <CopyRight />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner text-lg-end">
                  <Link className="ml-50 mr-50 " href="/refundPolicy">
                    {" "}
                    Refund Policy
                  </Link>
                  <Link href="/termsCondition">Terms and Conditions</Link>
                  <Link className="ml-50" href="/privacypolicy">
                    {" "}
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
