import React from "react";
import "./styles.css";
import { Button } from "antd";
import { BsArrowRightShort } from "react-icons/bs";

import footer1 from "images/footer1.png";

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer">
      <div className="footer-header">
        <div className="footer-header--text1">Portfolio</div>
        <div className="footer-header--text2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body--card">
          <img src={footer1} alt="" />
          <div className="footer-body--card--bot">
            <div className="text1">UI-UX DESIGN</div>
            <div className="text2">Product Admin Dashboard</div>
            <div className="text3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </div>
            <Button
              icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
              className="text4"
            >
              Case Study
            </Button>
          </div>
        </div>
        <div className="footer-body--card">
          <img src={footer1} alt="" />
          <div className="footer-body--card--bot">
            <div className="text1">UI-UX DESIGN</div>
            <div className="text2">Product Admin Dashboard</div>
            <div className="text3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </div>
            <Button
              icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
              className="text4"
            >
              Case Study
            </Button>
          </div>
        </div>
        <div className="footer-body--card">
          <img src={footer1} alt="" />
          <div className="footer-body--card--bot">
            <div className="text1">UI-UX DESIGN</div>
            <div className="text2">Product Admin Dashboard</div>
            <div className="text3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </div>
            <Button
              icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
              className="text4"
            >
              Case Study
            </Button>
          </div>
        </div>
        <div className="footer-body--card">
          <img src={footer1} alt="" />
          <div className="footer-body--card--bot">
            <div className="text1">UI-UX DESIGN</div>
            <div className="text2">Product Admin Dashboard</div>
            <div className="text3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </div>
            <Button
              icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
              className="text4"
            >
              Case Study
            </Button>
          </div>
        </div>
        <div className="footer-body--card">
          <img src={footer1} alt="" />
          <div className="footer-body--card--bot">
            <div className="text1">UI-UX DESIGN</div>
            <div className="text2">Product Admin Dashboard</div>
            <div className="text3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </div>
            <Button
              icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
              className="text4"
            >
              Case Study
            </Button>
          </div>
        </div>
        <div className="footer-body--card">
          <img src={footer1} alt="" />
          <div className="footer-body--card--bot">
            <div className="text1">UI-UX DESIGN</div>
            <div className="text2">Product Admin Dashboard</div>
            <div className="text3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </div>
            <Button
              icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
              className="text4"
            >
              Case Study
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-btn">More Project</div>
    </div>
  </div>
);

export default Footer;
