// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import AlumnoCard from './components/AlumnoCard';

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}
        <AlumnoCard
          nombre="Maria Perez"
          carrera="Diseño Gráfico"
          estado="Inactivo"
        />

        <AlumnoCard
          nombre="Carlos Mendoza"
          carrera="Administración Industrial"
          estado="Matriculado"
        />
      </div>

        <p>{numero}</p>
        <button
          className="btn btn-warning mx-2"
          onClick={() => setNumero(0)}
        >
          Reiniciar
        </button>

    </div>
  </>
  );
}

export default App;