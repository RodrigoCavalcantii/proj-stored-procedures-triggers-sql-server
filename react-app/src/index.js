import React from 'react';
import ReactDOM from 'react-dom/client';
import Presentation from './routes/default/components/Presentation/Presentation';

const App = () => {

  const pathName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];

  console.log("pathName",pathName);
  
  return (
    <Presentation />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
