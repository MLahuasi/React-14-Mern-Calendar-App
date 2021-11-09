import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const PrivateRoute = () => ({
    //isAuthenticated,      //Existe un usuario logueado
    component: Component, //Componente que se quiere renderizar
    ...rest               //parámetros que recibe el componente
}) => {

    return (
        <Route {...rest}
            component={
                (props) => (
                    <Component {...props} />
                )
            }
        />
    );

}
