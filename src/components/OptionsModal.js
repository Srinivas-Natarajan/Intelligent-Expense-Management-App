import React from 'react';
import Modal from 'react-modal';

const OptionsModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        onRequestClose={props.handleRemoveSelected}
    >
        <h3 className="modal-title">Selected Option</h3>
        {props.selectedOption && <p className="modal-body" >{props.selectedOption}</p>}
        <button className="button" onClick={props.handleRemoveSelected}>Okay!</button>
    </Modal>
);

export default OptionsModal;