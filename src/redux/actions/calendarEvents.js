import { types } from "../types/types";

/**
 * Crear un nuevo Evento
 * @param {*} event
 * @returns
 */
export const eventAddNew = ( event ) => {
    return {
        type: types.eventAddNew,
        payload: event
    }
};

/**
 * Seleccionar un Evento
 * @param {*} event
 * @returns
 */
export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

/**
 * Limpiar Formulario
 * @returns
 */
export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveNote
});

/**
 * Actualziar Nota
 * @param {*} event Nota seleccionada y Editada
 * @returns
 */
export const eventNoteUpdated = ( event ) => ({
    type: types.eventNoteUpdated,
    payload: event
});

/**
 * Eliminar Nota
 * @returns
 */
export const eventNoteDeleted = () => ({
    type: types.eventNoteDeleted
});