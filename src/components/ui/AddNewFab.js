import React from 'react'
import { useDispatch } from 'react-redux';

//Componentes Personalizados
import { uiOpenModal } from '../../redux/actions/ui';



export const AddNewFab = () => {
    const dispatch = useDispatch();

    const handleNewEvent = () => {
        //Abrir
        dispatch(uiOpenModal());
    };

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleNewEvent}
        >
            <i className="fas fa-plus" ></i>
        </button>
    )
}
