import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario paciente={paciente} pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes setPaciente={setPaciente} pacientes={pacientes}/>
      </div>
    </div>
  );
}

export default App;
