import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from "./SignIn.js";
import Result from "./Result.js";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route element={<SignIn/>} path="/"/>
    <Route element={<Result/>}path='/Result' />
  </Routes>
  </BrowserRouter>
);

