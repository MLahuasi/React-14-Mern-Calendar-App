// 2. [Configuraciones]: Crear App Inicial
import React from 'react';
//7 [React-Redux]. Expandir el Store
import { Provider } from 'react-redux';
//Componentes Personalizados
import { store } from './redux/store/store';
import { AppRouter } from './router/AppRouter';

export const CalendarApp = () => {

    store
    return (
        <Provider store={ store } >
            <AppRouter />
        </Provider>
    )
}


