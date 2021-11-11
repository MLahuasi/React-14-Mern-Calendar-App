import moment from "moment";    //Manejar Fechas
import { types } from "../types/types";

const initialState = {
    events: [{
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

        default:
            return state;
    }
}

//    console.log('eventAddNew: ', event);