import { types } from "../types/types";

//State por Default
const initialState = {
    modalOpen: false,
};

//2 [React-Redux]. Definir Reducer
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        //Abrir Pantalla Modal
        case types.iuOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        //Cerrar Pantalla Modal
        case types.iuCloseModal:
            return {
                ...state,
            }
        default:
            return state;
    }
}