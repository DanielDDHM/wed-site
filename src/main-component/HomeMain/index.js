import React from "react";

// components
import Couple from "../../components/couple";
import HeroMain from "../../components/HeroMain";
import Story from "../../components/story";
import Welcome from "../../components/welcome-area";
import Location from "../../components/location";
import Gallery from "../../components/gallery";
import Rsvp from "../../components/rsvp";
import Rule from "../../components/Rules";
import Navbar from "../../components/Navbar";
import Saveday from "../../components/countdown";
import Footer from "../../components/footer";
import couple1 from "../../images/couple/img-4.jpg";
import couple2 from "../../images/couple/img-3.jpg";

const HomeMain = () => {
  return (
    <div>
      <Navbar />
      <HeroMain />
      <Saveday />
      <Couple couple={"s2"} coupleimg1={couple1} coupleimg2={couple2} />
      <Welcome welcome={"s2"} />
      <Story />
      <Location />
      <Gallery />
      <Rsvp />
      <Rule />
      <Footer footer={"s2"} />
    </div>
  );
};

export default HomeMain;
