import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Cabecera/Cabecera';

function App() {
  return (
    <div className="NexoGamer">
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Inicio></Inicio>}>
              
          </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
