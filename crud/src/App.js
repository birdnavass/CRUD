import logo from './logo.svg';
import './App.css';

import Mostrar from './components/show.js';
import Agregar from './components/agg.js';
import Editar from './components/edit.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Mostrar /> } />
            <Route path='/create' element={ <Agregar/> } />
            <Route path='/edit/:id' element={ <Editar />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
