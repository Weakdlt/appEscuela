// src/App.jsx
import Navbar from './components/Navbar';
import AlumnoCard from './components/AlumnoCard';
// 1. Añadimos la importación del Contador
import Contador from './components/Contador'; 

function App() {
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
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado" 
          />

         <AlumnoCard
          nombre="Maria Perez"
          carrera="Diseño Gráfico"
          estadoInicial="Inactivo"
        />

        <AlumnoCard
          nombre="Carlos Mendoza"
          carrera="Administración Industrial"
          estadoInicial="Matriculado"
        />
      </div>

      {/* 4. Insertamos el componente Contador */}
      <Contador />

    </div>
  </>
  );
}

// Eliminamos la "}" extra que tenías al final
export default App;