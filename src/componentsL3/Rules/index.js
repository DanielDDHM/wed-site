import React from  'react';
import rule1 from '../../images/rule/img-1.jpg'
import rule2 from '../../images/rule/img-2.jpg'
import Sectiontitle from '../section-title'
import './style.css'



const Rule = () => {
    return(
        <div id='rules' className="gta-area section-padding">
            <Sectiontitle section={'Getting There'}/>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                        <div className="row">
                            <div className="heading col-md-12 col-sm-6">
                                <h4>Rule</h4>
                                <div className="gta-content">
                                    <p>Rule 1</p>
                                </div>
                                <div className="gta-img">
                                    <img src={rule1} alt=""/>
                                </div>
                            </div>
                            <div className="heading heading-2 col-md-12 col-sm-6">
                                <h4>Rule</h4>
                                <div className="gta-content">
                                    <p>Rule 2</p>
                                </div>
                                <div className="gta-img">
                                <img src={rule2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rule;