import React from 'react'
import Sectiontitle from '../section-title'
import './style.css'

const Couple = (props) => {
    return(
        <div id="couple" className={`about-wrap ${props.couple}`}>
            <div className="couple-area section-padding">
                <Sectiontitle section={'Feliz Casal'}/>
                <div className="gta-content">
                <h3 className='text-post-title'>As vezes podemos sentir desde o primeiro segundo que somos feitos um para o outro</h3>
                </div>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={props.coupleimg1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Milene</h3>
                                            <p>Sou a Milene, também conhecida como Pétala, Baiana, moro na Alemanha a mais ou menos 5 anos e em Freiburg encontrei o amor da minha vida. 
Desde a primeira vez que o vi senti que foi Deus que o colocou na minha vida, quando ele sorriu para mim foi como se o sol brilhasse e Deus sorrise para mim, então tudo fez sentido.
Meu amor, você me faz todos os dias feliz, estar com você é maravilhoso, sou muito grata por te ter em minha vida.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={props.coupleimg2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Kibrilha</h3>
                                            <p>Sou Kibrilha, vivo na Alemanha a 8 anos, temente a Deus, resiliente, responsável e um tanto perfeccionista.
No dia 26.09.2018 conheci a mulher que conquistou o meu coração com o seu sorriso contagiante, carácter, linda, carinho e respeito. Com a ajuda de Deus honro ela ontem como namorada, hoje como noiva e agora minha mulher.
Minha Girassol, te amo muito, você me fez de noivo, em breve esposo e no futuro pai dos seus filhos. Sou o homem mais feliz por te ter na minha vida.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;