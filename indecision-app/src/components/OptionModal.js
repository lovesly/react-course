import React from 'react';
import Modal from 'react-modal';

// or add ariaHideApp={ false } to Modal tag
const app = document.getElementById('app');
Modal.setAppElement(app);

const OptionModal = (props) => (
    <Modal
        isOpen={ !!props.selectedOption }
        contentLabel="Selected Option"
        onRequestClose={ props.handleCloseModal }
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {<p className="modal__body">{ props.selectedOption || "GoodBye Asshole..." }</p>}
        <button className="button" onClick={ props.handleCloseModal }>Okay</button>
    </Modal>
);

export default OptionModal;

