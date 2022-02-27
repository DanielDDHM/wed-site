
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './style.css'

const Welcome = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modal2, setModal2] = useState(false);
  
  const toggle2 = () => setModal2(!modal2)

  return (

    <div  className={`welcome-area ${props.welcome}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="welcome-content">
                        <h2>Festeje conosco!</h2>
                        <p>Temos a honra de convida-lós para o nosso casamento e juntos com vocês queremos tornar esse dia inesquecível.</p>
                        <p>O AMOR É PACIENTE. O AMOR E BONDOSO. NÃO INVEJA, NÃO SE VANGLORIA, NÃO SE ORGULHA." (I CORINTIOS 19:4)</p>
                        <div className="btn"><AnchorLink href='#rules'>Regras</AnchorLink></div>
                        <Button className="btn" onClick={toggle}>Localização</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Location</ModalHeader>
                            <ModalBody>
                                <div className="location-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.7440439965376!2d7.804996815643494!3d47.98000637921114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b31727779c5%3A0x9772c720f9193916!2sLukaskirche!5e0!3m2!1sde!2sde!4v1644912473389!5m2!1sde!2sde" />
                                </div>
                            </ModalBody>
                        </Modal>
                        <div></div>
                        <Button className="btn" onClick={toggle2}>Contato</Button>
                        <Modal isOpen={modal2} toggle={toggle2} className={className}>
                            <ModalHeader toggle={toggle2} class='text-post-title'>Contato</ModalHeader>
                            <ModalBody>
                               <p class='text-post-title'>Contato Milene: +49 176 85583034</p>
                               <p class='text-post-title'>Contato Kibrilha: +49 1575 2997750</p>
                            </ModalBody>
                        </Modal>       
                        {/* Terminar modal para mostrar contato */}
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Welcome;