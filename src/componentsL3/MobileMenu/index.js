import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: false,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
          <div className="logo2">
            <h2>
              <AnchorLink href="#home">Milene & Kibrilha</AnchorLink>
            </h2>
          </div>
          <ul className="responsivemenu">
            <li>
              <AnchorLink href="#home">Accueil</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#couple">Couple</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#story">Histoire</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#event">Événements</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#gallery">Galerie</AnchorLink>
            </li>
            <li onClick={this.setIsOpen}>
              <AnchorLink>langues</AnchorLink>
            </li>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  <li>
                    <Link to="/home">Portugues</Link>
                  </li>
                  <li>
                    <Link to="/home2">Deutsch</Link>
                  </li>
                  <li>
                    <Link to="/home3">Français</Link>
                  </li>
                </CardBody>
              </Card>
            </Collapse>
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
