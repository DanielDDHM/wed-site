import React from "react";
import Sectiontitle from "../section-title";
import "./style.css";

const Couple = (props) => {
  return (
    <div id="couple" className={`about-wrap ${props.couple}`}>
      <div className="couple-area section-padding">
        <Sectiontitle section={"Glückliches Paar"} />
        <div className="gta-content">
          <h3 className="text-post-title">
            Manchmal spüren wir von der ersten Sekunde an, dass wir eins
            geworden sind Zu den anderen
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
                        Ich bin Milene, auch bekannt als Pétala, Baiana, ich
                        lebe in Deutschland für ca. 5 Jahre und in Freiburg Ich
                        habe die Liebe meines Lebens gefunden. seit dem ersten
                        mal Ich sah ihn, ich fühlte, dass es Gott war, der ihn
                        in mein Leben setzte, Als er mich anlächelte, war es,
                        als ob die Sonne schien und Gott lächle mich an, dann
                        ergab alles einen Sinn. Meine Liebe, Du machst mich
                        jeden Tag glücklich, bei dir zu sein ist es Wunderbar,
                        ich bin so dankbar, dich in meinem Leben zu haben.
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
                        Ich bin Kibrilha, lebe seit 8 Jahren in Deutschland,
                        fürchte Gott, belastbar, verantwortungsbewusst und etwas
                        perfektionistisch. Bei der 26.09.2018 Ich habe die Frau
                        getroffen, die meine gewonnen hat Herz mit seinem
                        ansteckenden Lächeln, Charakter, schön, Zuneigung und
                        Respekt. Mit Gottes Hilfe ehre ich sie gestern als
                        Freundin, heute als Braut und jetzt meine Frau. Meine
                        Sonnenblume, ich liebe dich so sehr, du hast mich zum
                        Bräutigam gemacht, in zukünftigen Ehemann und
                        zukünftigen Vater ihrer Kinder. Ich bin glücklichster
                        Mann, dich in meinem Leben zu haben.
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
