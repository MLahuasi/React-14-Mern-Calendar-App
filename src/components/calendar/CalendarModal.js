//Nativos de React
import React, { useEffect, useState } from 'react';
//Importar funciones React-Redux
import { useDispatch, useSelector } from 'react-redux';

//Controles de Terceros
import Modal from 'react-modal';    //Pantalla Modal
import DateTimePicker from 'react-datetime-picker'; //Control de Fecha
import moment from 'moment';    //Manejar Fechas
import Swal from 'sweetalert2';

//Controles Personalizados
import { customStyles } from '../../helpers/modal-custom-styles';
import { uiCloseModal } from '../../redux/actions/ui';
import {
         eventAddNew,
         eventClearActiveEvent,
         eventNoteUpdated
       } from '../../redux/actions/calendarEvents';

//Buscar el componente que inicia la app
Modal.setAppElement('#root');

const now = moment().minute(0).seconds(0).add(1,'hour');
const nowPlus1 = now.clone().add(1, 'hours');
//Evento Inicial por Default
const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}

export const CalendarModal = () => {
    //9 [React-Redux]. Escuchar al State [en este caso ui.modalOpen]
    const state = useSelector(state => state.ui); //Obtener pantalla Modal
    const { modalOpen } = state;
    const { activeEvent } = useSelector( state => state.calendar ); //Obtener Evento Activo
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState( initEvent );                                                                  //Valores que tiene el Formulario

    const [titleValid, setTitleValid] = useState(true);

    const { title, notes, start, end } = formValues;    //Obtener valores que se cargan en el Formulario

    //Estar pendiente de cambios en el state en activeEvent
    useEffect(() => {
        if (activeEvent){
            console.log('activeEvent: ', activeEvent);
            setFormValues(activeEvent);
        }else{
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues]);

    //Eventos

    /**
     * Verificar cambios en un Input del Form
     * @param {*} param0 Input del Form que se quiere verificar los cambios
     */
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    /**
     * Evento que se ejecuta cuando se cierra la pantalla Modal
     */
    const closeModal = () => {
        //TODO: Cerrar el Modal
        console.log('cerrar modal');
        dispatch(uiCloseModal());
        //Reset controles del Modal
        dispatch( eventClearActiveEvent());
        setFormValues( initEvent );
    }

    /**
     * Se ejecuta cuando se cambia la fecha de Inicio
     * @param {*} e Fecha de Inicio
     */
    const handleStartDateChange = ( e ) => {
        console.log('handleStartDateChange: ', e);
        //Actualizar el State cuando se produce un cambio
        setFormValues({
            ...formValues,
            start: e
        });
    }

    /**
     * Se ejecuta cuando se cambia la fecha de Fin
     * @param {*} e Fecha de Fin
     */
    const handleEndDateChange = (e) => {
        console.log('handleEndDateChange: ', e);
        //Actualizar el State cuando se produce un cambio
        setFormValues({
            ...formValues,
            end: e
        });
    }

    /**
     * Se ejecuta cuando se da clic en el botón submit
     * @param {*} e Event
     */
    const handleSubmitForm = ( e ) => {
        e.preventDefault();
        // console.log(formValues);

        const momentStart = moment( start );
        const momentEnd = moment( end );

        // console.log('Start: ', momentStart);
        // console.log('End: ', momentEnd);

        if( momentStart.isSameOrAfter( momentEnd )){
            console.log('Fecha 2 debe ser mayor');
            return Swal.fire(
                'Error',
                'La Fecha Final debe ser mayor a la Fecha de Inicio',
                'error');
        }

        if( title.trim().length < 2){
            return setTitleValid(false);
        }

        if( activeEvent ){
            dispatch(eventNoteUpdated( formValues ));
        }else{
            //console.log('formValues: ', c);
            dispatch(eventAddNew({
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Mauricio'
                }
            }));
        }


        //TODO: Realizar Acceso a BDD
        setTitleValid(true);
        closeModal();

    }

    return (
        <Modal
            isOpen={modalOpen}                   //Mostrar u ocultar el Modal
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}            //Estilos Personalizados
            closeTimeoutMS={200}            //Tiempo para cerrar
            className="modal"               //Estilo Pantalla
            overlayClassName="modal-fondo"  //Estilo Fondo
        >

            <h1> {(activeEvent) ? 'Editar evento' : 'Nuevo evento' } </h1>
            <hr />
            <form
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={start}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={end}
                        minDate={ start }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
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
                        value={notes}
                        onChange={handleInputChange}
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
