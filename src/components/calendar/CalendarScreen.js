import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Configuración BigCalendar
 */
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'; //Idioma del Moment
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';

/**
 * Componentes Personalizados
 */
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../redux/actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../redux/actions/calendarEvents';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
moment.locale('es'); //Setear idioma en moment
const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const events = [
//     {
//         title: 'Cumpleaños Jefe',
//         start: moment().toDate(),
//         end: moment().add(2, 'hours').toDate(),
//         bgcolor: '#fafafa',
//         notes: 'Comprar el Pastel',
//         user: {
//             _id: '123',
//             name: 'Mauricio'
//         }
//     }
// ]


export const CalendarScreen = () => {

    //Obtener eventos del State
    const { events, activeEvent }  = useSelector(state => state.calendar)

    //10 [React-Redux]. Actualizar al State [en este caso ui.modalOpen]
    const dispatch = useDispatch();

    //Cuando se recarga la página recarga la vista del localStorage
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    //Eventos
    const onDoubleClick = (e) => {
        //console.log('Doble Click Event: ', e);
        console.log('Abrir Modal');
        dispatch(uiOpenModal());
    }

    const onSelect = (e) => {
        //console.log('Select Event: ', e);
        console.log("Seleccionar Tarea");
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        console.log('ViewChange Event: ', e);
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    //Obtiene la información de la  celda en donde se dió clic
    const onSelectSlot = (e) => {
        console.log('Celda - onSelectSlot: ', e);
        dispatch( eventClearActiveEvent() );
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#367CF7',
            boderRadius: 'Opx',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <h1>CalendarScreen</h1>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange} //Obtener la vista actual del calendario
                onSelectSlot={ onSelectSlot }
                selectable={true}
                view={lastView} //Cargar una vista
                components={ //Personalizar el evento del calendario
                    {
                        event: CalendarEvent
                    }
                }
            />

            <AddNewFab />

            {/* condicional en HTML */}
            { (activeEvent) && <DeleteEventFab /> }

            <CalendarModal />
        </div>
    )
}
