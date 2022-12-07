import React from "react";
import "./styles.css";
import { Button } from "antd";
import { BsArrowRightShort } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const limit_constant = 3;

function paginate(array, limit, page) {
  return array.slice((page - 1) * limit, page * limit);
}

const Footer = (props) => {
  const { footerTitle, footerDescription, footerListCard } = props;
  const [page, setPage] = React.useState(1);
  const [cardState, setCardState] = React.useState(
    paginate(footerListCard, limit_constant, 1)
  );
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-header">
          <div className="footer-header--text1">{footerTitle}</div>
          <div className="footer-header--text2">{footerDescription}</div>
        </div>
        <div className="footer-body">
          {cardState &&
            cardState.map((item, id) => (
              <div className="footer-body--card">
                <LazyLoadImage src={item.imageUrl} alt="" />
                <div className="footer-body--card--bot">
                  <div className="text1">{item.type}</div>
                  <div className="text2">{item.title}</div>
                  <div className="text3">{item.description}</div>
                  <Button
                    icon={<BsArrowRightShort style={{ fontSize: 30 }} />}
                    className="text4"
                  >
                    Case Study
                  </Button>
                </div>
              </div>
            ))}
        </div>
        <Button
          onClick={() => {
            setPage((oldState) => oldState + 1);
            setCardState((oldState) =>
              oldState.concat(
                paginate(footerListCard, limit_constant, page + 1)
              )
            );
          }}
          className="footer-btn"
        >
          More Project
        </Button>
      </div>
    </div>
  );
};

export default Footer;
