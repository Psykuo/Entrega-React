import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Colecciones from './Componentes/Colecciones';
import Contacto from './Componentes/Contacto';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/productos" element={<ItemListContainer greeting='Aca van a aparecer todos los productos' />} />
          <Route path="/colecciones" element={<Colecciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
