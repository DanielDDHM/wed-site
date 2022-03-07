import React from "react";
import Sectiontitle from "../section-title";
import "./style.css";

const Couple = (props) => {
  return (
    <div id="couple" className={`about-wrap ${props.couple}`}>
      <div className="couple-area section-padding">
        <Sectiontitle section={"Couple heureux"} />
        <div className="gta-content">
          <h3 className="text-post-title">
            Parfois on peut sentir dès la première seconde qu'on ne fait plus
            qu'un À l'autre
          </h3>
        </div>
        <div className="container">
          <div className="couple-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-2">
                  <div className="couple-img">
                    <img src={props.coupleimg1} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Milene</h3>
                      <p>
                        Je suis Milene, aussi connue sous le nom de Petala,
                        Baiana, je vis en Allemagne depuis environ 5 ans et à
                        Fribourg J'ai trouvé l'amour de ma vie. depuis la
                        première fois Je l'ai vu, j'ai senti que c'était Dieu
                        qui l'avait mis dans ma vie, quand il m'a souri, c'était
                        comme si le soleil brillait et Dieu me sourit, alors
                        tout a pris un sens. Mon amour, tu me rends heureux tous
                        les jours, être avec toi c'est merveilleux, je suis
                        tellement reconnaissant de vous avoir dans ma vie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-3">
                  <div className="couple-img couple-img-2">
                    <img src={props.coupleimg2} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Kibrilha</h3>
                      <p>
                        Je m'appelle Kibrilha, je vis en Allemagne depuis 8 ans,
                        craignant Dieu, résilient, responsable et quelque peu
                        perfectionniste. Au 26.09.2018 J'ai rencontré la femme
                        qui a gagné mon coeur avec son sourire contagieux,
                        caractère, beau, tendresse et respect. Avec l'aide de
                        Dieu je l'honore hier en tant que petite amie,
                        aujourd'hui en tant que mariée et maintenant ma femme.
                        Mon Tournesol, je t'aime tant, tu as fait de moi un
                        époux, en futur époux et futur père de ses enfants. je
                        suis l'homme le plus heureux de t'avoir dans ma vie.
                      </p>
                    </div>
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

export default Couple;
