import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { title, start, end, notes, user } = event;
    // console.log(start);
    // console.log(end);
    // console.log(title);
    return (
        <div>
            <strong>Evento: {title} </strong>
            <span> - {user.name} </span>
        </div>
    )
}
