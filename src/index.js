import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from "./features/users"
import boxes from "./features/boxes"
import chart from './features/chart';
import items from './features/items';


const store = configureStore({
  reducer: {
users,
boxes,
chart,
items
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>

</Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
