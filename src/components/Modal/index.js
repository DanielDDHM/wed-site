import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import "./style.css";

const Location = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} className={className}>
        <ModalBody>
          Lorem ipsum
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Location;
