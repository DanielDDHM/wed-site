import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-sticky-header/styles.css";
import MobileMenu from "../../components/MobileMenu";

import "./style.css";

const Header = () => {
  return (
    <div className="Header_root">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <h2>
                  <AnchorLink href="#home">Milene & Kibrilha</AnchorLink>
                </h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="header-menu d-lg-block d-none">
                <ul className="mobail-menu d-flex">
                  <li>
                    <AnchorLink href="#home">Início</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#couple">Casal</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#story">História</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#event">Eventos</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#gallery">Galeria</AnchorLink>
                  </li>
                  <li>
                    <Link to="/">Idiomas</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/home">Portugues</Link>
                      </li>
                      <li>
                        <Link to="/home2">Dutch</Link>
                      </li>
                      <li>
                        <Link to="/home3">French</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
