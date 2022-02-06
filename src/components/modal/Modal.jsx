import React from 'react';
import { StyledModal, StyledModalContent, StyledModalButton } from './Modal.styled';
const Modal = ({ children, onClose }) => {
    return (
        <StyledModal>
            <StyledModalContent>
                <StyledModalButton onClick={onClose}>x</StyledModalButton>
                {children}
            </StyledModalContent>
        </StyledModal>
    );
};

export default Modal;