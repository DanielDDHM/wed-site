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
                                <p>Você fala portugues?
E com essa pergunta no escritório de estrangeiro começamos a conversar, nos encantamos um com o sorriso do outro, uma amizade cresceu e o nosso amor começou.</p>
                                <p>26.09.2018</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Primeiro Encontro</h3>
                                <p>Nosso primeiro encontro foi no Europa park, eu nunca tinha ido, ele tinha ido várias vezes, me mostrou o parque todo, andamos de mãos dadas tão naturalmente, dançamos e um pombo acertou minha mochila, mas talvez isso tenha trazido sorte ao invés de azar, a sorte de encontrar um amor para toda uma vida.</p>
                                <p>27.11.2018</p>
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
                                <p>Enquanto conversávamos sobre casar, compartilhei a ele os lugares em que gostaria de ser pedida em casamento, e ele me fez uma surpresa, em Paris, em frente a torre Eiffel, não desconfiei de nada e ele preparou tudo, do roteiro do dia e da minha roupa e esse dia  foi inesquecível.
Funfact: Enquanto andávamos por Paris vimos duas noivas, falei "se nós vermos a 3ª, e sinal que a próxima serei eu". Ele riu nervosamente como nunca tinha visto e a terceira noiva fui eu mesmo hahahahaha!</p>
                                <p>22.08.2020</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Noivado</h3>
                                <p>Toda família ficou muito feliz com a notícia, fui acolhida pela família dele e ele pela minha, e agora no dia 03.09.2022 vamos velar esse amor perante a Deus, família e amigos. Contamos com vocês!</p>
                                <p>03.09.2022</p>
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