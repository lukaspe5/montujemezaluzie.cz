import React from 'react';
import {Backdrop, Fade} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import styled, {withTheme} from 'styled-components'

const StyledSimpleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
`;

export const SimpleModal = withTheme(({open, children, onClose}) => {
    return (
        <Modal
            className='simpleModal'
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <StyledSimpleModal onClick={onClose}>
                <Fade in={open}>
                    {children}
                </Fade>
            </StyledSimpleModal>
        </Modal>
    );
});