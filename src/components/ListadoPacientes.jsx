import Paciente from "./Paciente";

const ListadoPacientes = ({ setPaciente, pacientes, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Comienza agregando pacientes y{" "}
            <span className="text-indigo-600 font-bold">
              Aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
