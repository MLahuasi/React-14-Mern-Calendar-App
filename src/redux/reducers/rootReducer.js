//3 [React-Redux]. Definir combineReducers [Convinación de todos los reducers]
import { combineReducers } from 'redux';
import { uiReducer } from './uiReducers';

//Se unen de acuerdo a la estructura que se quiere dar al store
export const rootReducer = combineReducers({
    ui: uiReducer,
    //TODO: Agregar el resto de Reduces
});

