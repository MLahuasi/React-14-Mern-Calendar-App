//8 [React-Redux]. Crear Acción para modificar store

import { types } from "../types/types";

export const uiOpenModal = () => ({
    type: types.iuOpenModal
});

export const uiCloseModal = () => ({
    type: types.iuCloseModal
});