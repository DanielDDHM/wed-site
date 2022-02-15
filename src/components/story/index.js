import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/story/img-1.jpg'
import strory2 from '../../images/story/img-2.jpg'
import strory3 from '../../images/story/img-3.jpg'
import strory4 from '../../images/story/img-4.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <Sectiontitle section={'Nossa Historia de Amor'}/>
            <div className="container">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Primeira foto Juntos</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Primeiro Encontro</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory2} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory3} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Pedido</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Noivado</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    )
}

export default Story;