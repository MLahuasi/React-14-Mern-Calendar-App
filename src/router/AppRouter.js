import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';


export const AppRouter = () => {
    return (
        <Router>
            {/* 3. [Configuraciones]:  El componente Router envuelve a un switch que maneja las Rutas */}

            {
                //TODO:
                // exact -> /login -> LoginScreen
                // exact -> /      -> CalendarScreen
            }
            <div>
                <Routes>
                    <Route exact path="/" element={<CalendarScreen/>}/>
                    <Route exact path="/login" element={<LoginScreen/>}/>
                    <Route path="*" element={<CalendarScreen />} />
                </Routes>
            </div>
        </Router>
    )
}
