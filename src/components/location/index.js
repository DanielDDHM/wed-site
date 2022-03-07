import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Sectiontitle from "../section-title";
import strory1 from "../../images/events/img-1.jpg";
import strory2 from "../../images/events/img-2.jpg";
import strory3 from "../../images/events/img-3.jpg";

import "./style.css";

const Location = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modal2, setModal2] = useState(false);

  const toggle2 = () => setModal2(!modal2);

  return (
    <div id="event" className="event-section section-padding">
      <Sectiontitle section={"Programação"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tabs-site-button">
              <div className="event-tabs">
                <div className="col-md-12 col-12">
                  <div className="event-wrap">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="event-img">
                          <img src={strory1} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="event-text">
                          <h3>Cerimonia Religiosa</h3>
                          <span>03 Setembro de 2022, 3:00 PM</span>
                          <span>Gemeinde des Sieges/Eglise la Victoire</span>
                          <span>Am Mettweg 39, 79111 Freiburg im Breisgau</span>
                          <Button className="btn" onClick={toggle2}>
                            Location
                          </Button>
                          <Modal
                            isOpen={modal2}
                            toggle={toggle2}
                            className={className}
                          >
                            <ModalHeader toggle={toggle2}>
                              Localização da Cerimonia religiosa
                            </ModalHeader>
                            <ModalBody>
                              <div className="location-map-2">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.7440439965376!2d7.804996815643494!3d47.98000637921114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b31727779c5%3A0x9772c720f9193916!2sLukaskirche!5e0!3m2!1sde!2sde!4v1644912473389!5m2!1sde!2sde" />
                              </div>
                            </ModalBody>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-wrap">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="event-text event-text-2">
                          <h3>Partida ao Salão de festas</h3>
                          <span>03 Setembro de 2022, 7:00 PM</span>
                          <span>Im Tuniberghaus Tiegen</span>
                          <span>
                            Im Maierbrühl 2, 79112 Freiburg im Breisgau
                          </span>
                          <Button className="btn" onClick={toggle}>
                            Localização
                          </Button>
                          <Modal
                            isOpen={modal}
                            toggle={toggle}
                            className={className}
                          >
                            <ModalHeader toggle={toggle}>
                              Localização do salao de festas
                            </ModalHeader>
                            <ModalBody>
                              <div className="location-map-2">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.6158575370537!2d7.717510015643599!3d47.982484179211376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791101f9e3fffff%3A0xb4024298657d1ba9!2sTuniberghaus!5e0!3m2!1sde!2sde!4v1644913536851!5m2!1sde!2sde" />
                              </div>
                            </ModalBody>
                          </Modal>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="event-img">
                          <img src={strory2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-wrap">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="event-img">
                          <img src={strory3} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="event-text">
                          <h3>Jantar e vamos dançar</h3>
                          <span>03 Setembro de 2022, 9:00 PM</span>
                          <span>Im Tuniberghaus Tiegen</span>
                          <span>
                            Im Maierbrühl 2, 79112 Freiburg im Breisgau
                          </span>
                          <Button className="btn" onClick={toggle}>
                            Localização
                          </Button>
                          <Modal
                            isOpen={modal}
                            toggle={toggle}
                            className={className}
                          >
                            <ModalHeader toggle={toggle}>
                              Localização do salao de festas
                            </ModalHeader>
                            <ModalBody>
                              <div className="location-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.6158575370537!2d7.717510015643599!3d47.982484179211376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791101f9e3fffff%3A0xb4024298657d1ba9!2sTuniberghaus!5e0!3m2!1sde!2sde!4v1644913536851!5m2!1sde!2sde" />
                              </div>
                            </ModalBody>
                          </Modal>
                        </div>
                      </div>
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
export default Location;
