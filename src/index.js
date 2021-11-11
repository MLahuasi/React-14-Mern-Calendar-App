import React from 'react';
import ReactDOM from 'react-dom';

//Custom Components
import { CalendarApp } from './CalendarApp';

import './styles/styles.css';
import './styles/modal.css';
import './styles/datepicker.css';
import './styles/calendar.css';

ReactDOM.render(
  <CalendarApp />,
  document.getElementById('root')
);


