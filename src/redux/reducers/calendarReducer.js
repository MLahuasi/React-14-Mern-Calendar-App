import moment from "moment";    //Manejar Fechas
import { types } from "../types/types";

const initialState = {
    events: [{
            id: new Date().getTime(),
            title: 'Cumpleaños Jefe',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            notes: 'Comprar el Pastel',
            user: {
                _id: '123',
                name: 'Mauricio'
            }
    }],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {
        //Seleccionar un Evento
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        //Añadir un nuevo Evento
        case types.eventAddNew:
            //console.log('calendarReducer: ', state.events);
            //console.log('eventosState: ', eventosState);
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        //Limpiar Nota Activa
        case types.eventClearActiveNote:
            return {
                ...state,
                activeEvent: null
            }

        //Actualizar Nota Activa
        case types.eventNoteUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id ) ? action.payload : e
                )
            }

        default:
            return state;
    }
}

//    console.log('eventAddNew: ', event);