import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store"

import './index.css';

import Header from './components/header/Header';
import Player from './components/player/Player';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Player />
      </BrowserRouter>
  </Provider>
);