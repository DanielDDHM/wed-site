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
      <Sectiontitle section={"Unsere Liebesgeschichte"} />
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
                <h3>Erstes gemeinsames Photo</h3>
                <p>
                  Sprechen Sie Portugiesisch? Und mit dieser Frage im Büro von
                  Ausländer kamen wir ins Gespräch, wir waren verzaubert von dem
                  Lächeln vom anderen, eine Freundschaft wuchs und unsere Liebe
                  begann.
                </p>
                <p>26.09.2018</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="story-text right-align-text">
                <h3>Erste Verabredung</h3>
                <p>
                  Unser erstes Date war im Europapark, das hatte ich noch nie
                  gegangen, er war mehrmals gegangen, zeigte mir den ganzen
                  Park, Wir gehen so natürlich Hand in Hand, wir tanzen und eine
                  Taube traf meinen Rucksack, aber vielleicht brachte das dem
                  Glück statt Pech, Glück, Liebe für ein Ganzes zu finden Leben.
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
                <h3>Anfrage</h3>
                <p>
                  Als wir übers Heiraten sprachen, teilte ich ihm das mit Orte,
                  an denen ich gerne vorgeschlagen werden würde, und er machte
                  eine Überraschung, in Paris, vor dem Eiffelturm, nein Ich
                  ahnte nichts und er bereitete alles vor, vom Drehbuch des
                  Tages und dem meine Klamotten und dieser Tag war
                  unvergesslich. Funfact: Während Als wir durch Paris gingen,
                  sahen wir zwei Bräute, ich sagte: "Wenn wir die sehen 3. und
                  das Zeichen, dass der Nächste ich sein werde.“ Er kicherte
                  nervös, als ob Ich hatte es noch nie gesehen und die dritte
                  Braut war ich selbst, hahahahaha!
                </p>
                <p>22.08.2020</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="story-text right-align-text">
                <h3>Engagement</h3>
                <p>
                  Die ganze Familie war sehr glücklich über die Nachricht, ich
                  wurde willkommen geheißen für seine Familie und er für meine
                  und jetzt am 03.09.2022 lasst uns diese Liebe vor Gott,
                  Familie und Freunden verhüllen. Wir zählen auf dich!
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
