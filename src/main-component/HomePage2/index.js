import React from  'react';

// componentsL2
import Couple from '../../componentsL2/couple';
import SimpleSlider from '../../componentsL2/hero';
import Story from '../../componentsL2/story';
import Welcome from '../../componentsL2/welcome-area';
import People from '../../componentsL2/people';
import Location from '../../componentsL2/location';
import Gallery from '../../componentsL2/gallery';
import Rsvp from '../../componentsL2/rsvp';
import Rule from '../../componentsL2/Rules';
import Navbar from '../../componentsL2/Navbar'
import Saveday from '../../componentsL2/countdown'
import Footer from '../../componentsL2/footer'

import couple1 from '../../images/couple/img-2.jpg'
import couple2 from '../../images/couple/img-1.jpg'


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Couple coupleimg1={couple1} coupleimg2={couple2}/>
           <Welcome/>
           <Story/>
           <People/>
           <Location/>
           <Gallery/>
           <Rsvp/>
           <Rule/>
           <Footer />
       </div>
    )
}

export default Homepage;