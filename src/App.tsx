import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Paginas/Home';
import Setup from './Paginas/Setup';
import Jogos from './Paginas/Jogos';
import Cadastro from './Paginas/Cadastro';
import Localizacao from './Paginas/Localizacao';
import Footer from './Componentes/Footer';
import Menu from './Componentes/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='Conteudo'>
          <Menu />
          <main className='container'>
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/setup" element={< Setup />} />
              <Route path="/jogos" element={< Jogos />} />
              <Route path="/cadastro" element={< Cadastro />} />
              <Route path="/localizacao" element={< Localizacao />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
