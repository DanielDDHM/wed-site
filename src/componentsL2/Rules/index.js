import React from "react";
import Sectiontitle from "../section-title";
import "./style.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Rule = () => {
  return (
    <div id="rules" className="gta-area section-padding">
      <Sectiontitle section={"Rules"} />
      <div className="container">
        <div className="row">
          <div className="col col-lg-8 offset-lg-2 col-md-8 offset-md-2 rule-row">
            <div className="heading col-md-12 col-sm-6">
              <div className="gta-content">
                <h3 className="gta-content-h3">
                  Angesichts der Pandemie folgen wir den 3-G-Regel-Protokollen,
                  Um mehr zu erfahren, klicken Sie auf den unten stehenden Link.
                </h3>
                <div className="col-12 text-center">
                  <div
                    className="btn "
                    onClick={() =>
                      window.open(
                        "https://www.bundesregierung.de/breg-de/aktuelles/bund-laender-beratung-corona-1949606",
                        "_blank"
                      )
                    }
                  >
                    <AnchorLink href="#rules">3-G-Regel</AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rule;
