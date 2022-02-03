
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'

const Welcome = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (

    <div  className={`welcome-area ${props.welcome}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="welcome-content">
                        <h2>Welcome to our big day</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters</p>
                        <div className="btn"><AnchorLink href='#rsvp'>Rsvp</AnchorLink></div>
                        <Button className="btn" onClick={toggle}>Location</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Location</ModalHeader>
                            <ModalBody>
                                <div className="location-map">
                                    <iframe src="" />
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Welcome;