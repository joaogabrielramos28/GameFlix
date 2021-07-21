import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DetailsProvider } from './context/moveDetails';



ReactDOM.render(
    <DetailsProvider >

      <App />
    </DetailsProvider>,
    
  
  document.getElementById('root')
);


