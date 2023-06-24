import React, {Fragment} from 'react';

import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const BackDrop = (props) => {
    return(
        <div className={styles.backdrop}></div>
    );
};

const ModalOverlay = (props) => {
    return(
        <div className={styles['modal-container']}>{props.children}</div>
    );
};

const Modal = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, 
            document.getElementById('overlay-root'))}

            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, 
            document.getElementById('overlay-root'))}
        </Fragment>
    );
};

export default Modal;