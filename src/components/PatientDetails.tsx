import { usePatienteStore } from "../store/store";
import { Patient } from "../types/indes";

type PatientDetailsProps = {
  patient: Patient;
};
const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const { deletePatient, getPatientId } = usePatienteStore();

  return (
    <div className="  mb-5 px-5 py-10 shadow-lg rounded-xl bg-white w-full">

      <div>
        <p>
          <span className=" font-bold uppercase">id: </span>
          {patient.id}
        </p>
        <p>
          <span className=" font-bold uppercase ">Nombre: </span>
          {patient.name}
        </p>
        <p>
          <span className=" font-bold uppercase ">propietario: </span>
          {patient.owner}
        </p>
        <p>
          <span className=" font-bold uppercase ">Email: </span>
          {patient.email}
        </p>
        <p>
          <span className=" font-bold uppercase ">Fecha de Alta: </span>
          {patient.date.toLocaleString()}
        </p>
        <p>
          <span className=" font-bold uppercase ">Síntomas: </span>
          {patient.symptoms}
        </p>
      </div>
      <div className=" flex justify-between mt-5 flex-col lg:flex-row gap-3 ">
        <button
          className="border py-2 px-10 text-white bg-blue-600 font-bold rounded-lg hover:bg-blue-800"
          onClick={() => {
            getPatientId(patient.id);
          }}
        >
          Modificar
        </button>
        <button
          className="border py-2 px-10 text-white bg-red-600 font-bold  rounded-lg  hover:bg-red-800"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
