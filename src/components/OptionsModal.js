import React from 'react';
import Modal from 'react-modal';

const OptionsModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleRemoveSelected}
    >
        {props.selectedOption && <h3>{props.selectedOption}</h3>}
        <button onClick={props.handleRemoveSelected}>Okay!</button>
    </Modal>
);

export default OptionsModal;