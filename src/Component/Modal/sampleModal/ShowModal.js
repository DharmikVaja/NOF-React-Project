import React from "react";

const MyModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper"  onClick={closeModal}>
        <div className="modal-container">
          <h1>Important Notice! </h1>
          <p>
            Whenever you, Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Accusamus ut nam reiciendis culpa explicabo odio possimus
            harum, iusto eos nostrum quisquam laboriosam porro.
          </p>
          <button className="modal-btn" onClick={closeModal}>Accept it</button>
        </div>
      </div>
    </>
  );
};

export default MyModal;
