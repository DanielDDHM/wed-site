import React from  'react';

// componentsL3
import Couple from '../../componentsL3/couple';
import SimpleSlider from '../../componentsL3/hero';
import Story from '../../componentsL3/story';
import Welcome from '../../componentsL3/welcome-area';
import People from '../../componentsL3/people';
import Location from '../../componentsL3/location';
import Gallery from '../../componentsL3/gallery';
import Rsvp from '../../componentsL3/rsvp';
import Rule from '../../componentsL3/Rules';
import Navbar from '../../componentsL3/Navbar'
import Saveday from '../../componentsL3/countdown'
import Footer from '../../componentsL3/footer'

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