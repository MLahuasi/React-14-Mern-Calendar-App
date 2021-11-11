import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
//6 [React-Redux]. Configurar thunk
import thunk from 'redux-thunk'

//Componentes Personalizados
import { rootReducer } from '../reducers/rootReducer';

//5 [React-Redux]. Configurar redux-devtools-extension
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//4 [React-Redux]. Definir Store
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);