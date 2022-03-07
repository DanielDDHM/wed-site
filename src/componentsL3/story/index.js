import React from "react";
import Sectiontitle from "../section-title";
import strory1 from "../../images/story/img-1.jpg";
import strory2 from "../../images/story/img-2.jpg";
import strory3 from "../../images/story/img-3.jpg";
import strory4 from "../../images/story/img-4.jpg";
import "./style.css";

const Story = () => {
  return (
    <div id="story" className="story-area section-padding">
      <Sectiontitle section={"Notre histoire d'amour"} />
      <div className="container">
        <div className="story-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 pr-n">
              <div className="story-img">
                <img src={strory1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="story-text left-align-text">
                <h3>Première photo ensemble</h3>
                <p>
                  Parles tu Portugais? Et avec cette question dans le bureau de
                  étranger, nous avons commencé à parler, nous avons été
                  enchantés par le sourire de l'autre, une amitié s'est
                  développée et notre amour a commencé.
                </p>
                <p>26.09.2018</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="story-text right-align-text">
                <h3>Premier rendez-vous</h3>
                <p>
                  Notre premier rendez-vous était à Europa Park, je n'avais
                  jamais parti, il y était allé plusieurs fois, m'a montré tout
                  le parc, on marche main dans la main si naturellement, on
                  danse et un pigeon frappé mon sac à dos, mais peut-être que
                  cela a porté chance au au lieu de la malchance, la chance de
                  trouver l'amour pour un tout la vie.
                </p>
                <p>27.11.2018</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 pl-n">
              <div className="story-img">
                <img src={strory2} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 pr-n">
              <div className="story-img">
                <img src={strory3} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="story-text left-align-text">
                <h3>Demande</h3>
                <p>
                  Alors que nous parlions de nous marier, j'ai partagé avec lui
                  la endroits où j'aimerais qu'on me demande de me marier, et il
                  fait une surprise, à Paris, devant la tour Eiffel, non Je ne
                  me doutais de rien et il a tout préparé, du scénario du jour
                  au mes vêtements et ce jour était inoubliable. Fait amusant :
                  pendant que se promenant dans Paris on a vu deux mariées, j'ai
                  dit "si on voit le 3ème, et signe que le prochain sera moi."
                  Il gloussa nerveusement comme si Je ne l'avais jamais vu et la
                  troisième mariée était moi-même hahahahaha !
                </p>
                <p>22.08.2020</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="story-text right-align-text">
                <h3>Engagement</h3>
                <p>
                  Toute la famille était très contente de la nouvelle, j'ai été
                  bien accueilli pour sa famille et lui pour la mienne, et
                  maintenant le 03.09.2022 Voilons cet amour devant Dieu,
                  famille et amis. Nous comptons sur vous!
                </p>
                <p>03.09.2022</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 pl-n">
              <div className="story-img">
                <img src={strory4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
