import React from "react";
import "./styles.css";

const Header = (props) => {
  const { headerName, headerMenu } = props;
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-avatar">
          <div className="header-avatar--circle">
            {headerName[0].toUpperCase()}
          </div>
          <div className="header-avatar--name">{headerName}</div>
        </div>
        <div className="header-menu">
          {headerMenu &&
            headerMenu.map((item, id) => (
              <div key={id} className="header-menu--item">
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
