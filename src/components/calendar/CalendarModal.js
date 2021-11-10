import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

//Buscar el componente que inicia la app
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
        console.log('closing....');
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}                   //Mostrar u ocultar el Modal
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}            //Estilos Personalizados
            closeTimeoutMS={200}            //Tiempo para cerrar
            className="modal"               //Estilo Pantalla
            overlayClassName="modal-fondo"  //Estilo Fondo
        >
            <h1>Hola Mundo</h1>
            <hr/>
            <span>Hola nuevamente....{}</span>
        </Modal>
    )
}
