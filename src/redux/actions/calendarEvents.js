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