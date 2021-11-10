import React, { useState } from 'react';
//Controles de Terceros
import Modal from 'react-modal';    //Pantalla Modal
import DateTimePicker from 'react-datetime-picker'; //Control de Fecha
import moment from 'moment';

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

const now = moment().minute(0).seconds(0).add(1,'hour');
const nowPlus1 = now.clone().add(1, 'hours');

export const CalendarModal = () => {

    //State
    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(now.add(1,'h').toDate());

    //Eventos
    const closeModal = () => {
        console.log('closing....');
    }

    const handleStartDateChange = ( e ) => {
        console.log('handleStartDateChange: ', e);
        setDateStart(e);
    }

    const handleEndDateChange = (e) => {
        console.log('handleEndDateChange: ', e);
        setDateEnd(e);
    }

    return (
        <Modal
            isOpen={true}                   //Mostrar u ocultar el Modal
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}            //Estilos Personalizados
            closeTimeoutMS={200}            //Tiempo para cerrar
            className="modal"               //Estilo Pantalla
            overlayClassName="modal-fondo"  //Estilo Fondo
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={dateStart}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        minDate={ dateStart }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
