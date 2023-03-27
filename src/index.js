import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Amallar from './components/Amallar'
import Statistika from './components/Statistika'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Statistika />} />
          <Route path='/amallar' element={<Amallar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


