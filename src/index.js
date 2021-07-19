import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DetailsProvider } from './context/gameDetails';



ReactDOM.render(
    <DetailsProvider >

      <App />
    </DetailsProvider>,
    
  
  document.getElementById('root')
);


