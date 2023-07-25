import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/Store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { persistStore } from 'redux-persist';
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
