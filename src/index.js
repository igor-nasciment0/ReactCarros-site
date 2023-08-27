import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ControleClientes from './pages/controleClientes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/admin/clientes' element={<ControleClientes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);