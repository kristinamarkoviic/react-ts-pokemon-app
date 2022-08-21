import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//compontents
import App from './App';
//translations

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);