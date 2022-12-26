import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  let pacientesLS = JSON.parse(localStorage.getItem("pacientes"));
  if (!pacientesLS) {
    pacientesLS = [];
  }
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    if (pacientesLS) {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    } else {
      localStorage.setItem("pacientes", JSON.stringify([]));
    }
  }, [pacientes, pacientesLS]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes([...pacientesActualizados]);
  };
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
        <ListadoPacientes
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
