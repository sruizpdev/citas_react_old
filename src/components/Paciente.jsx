import React from "react";

const Paciente = () => {
  return (
    <div className="m-3 px-5 py-10 rounded-md bg-white shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{""}
        <span className="font-normal normal-case">Dr. Cooperk</span>
      </p>{" "}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{""}
        <span className="font-normal normal-case">Sergio</span>
      </p>{" "}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{""}
        <span className="font-normal normal-case">sergio@correo.com</span>
      </p>{" "}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta:{""}
        <span className="font-normal normal-case">12 Diciembre 2022</span>
      </p>{" "}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          tempore laboriosam voluptatibus rerum nostrum quam itaque, veritatis
          explicabo! Fuga beatae distinctio minima sequi, commodi corporis.
          Cumque, laborum. Maiores, suscipit laborum.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
