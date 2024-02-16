import React, { useState } from "react";
import MyModal from "./ShowModal";
import "./modal.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col lg-8 col-md-12">
            <button className="modal-btn" onClick={openModal}>Open Modal</button>
            {showModal && <MyModal closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
