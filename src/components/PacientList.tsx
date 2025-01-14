import { usePatienteStore } from "../store/store";
import PatientDetails from "./PatientDetails";

const PacientList = () => {
  const { patients } = usePatienteStore();

  return (
    <div className="flex flex-col items-center md: h-screen overflow-y-scroll pe-5">
      {patients.length ? (
        <>
          <h2 className=" text-2xl font-bold text-center mb-3">
            Listado de Pacientes
          </h2>
          <p className=" text-xl mt-5 mb-10 text-center ">
            Adminidtra tus{" "}
            <span className=" text-indigo-700">Pacientes y Citas</span>
          </p>
         
         {patients.map((patient) => {
            return <PatientDetails
            key={patient.id}
            patient={patient}
            />;
          })}
         
        </>
      ) : (
        <>
          <h2 className=" text-2xl font-bold text-center mb-3">
            No hay Pacientes
          </h2>
          <p>
            Comienza Agregando Pacientes{" "}
            <span className=" text-indigo-700">
              {" "}
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PacientList;
