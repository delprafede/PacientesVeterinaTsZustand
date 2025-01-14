import { Patient } from "../types/indes";

type PatientDetailsProps = {
    patient: Patient;
}
const PatientDetails = ({patient} : PatientDetailsProps) => {
  return (
    <div className="  mb-5 px-5 py-10 shadow-lg rounded-xl bg-white w-full">
       <div>
       <p><span className=" font-bold uppercase">id: </span>{patient.id}</p>
        <p><span className=" font-bold uppercase ">Nombre: </span>{patient.name}</p>
        <p><span className=" font-bold uppercase ">propietario: </span>{patient.owner}</p>
        <p><span className=" font-bold uppercase ">Email: </span>{patient.email}</p>
        <p><span className=" font-bold uppercase ">Fecha de Alta: </span>{patient.date.toDateString()}</p>
        <p><span className=" font-bold uppercase ">Síntomas: </span>{patient.symptoms}</p>
       </div>
       <div className=" flex justify-between mt-5">
        <button className="border p-2 text-white bg-blue-600 font-bold rounded-lg">Modificar</button>
        <button className="border p-2 text-white bg-red-600 font-bold  rounded-lg">Eliminar</button>
        
       </div>
    </div>
  )
}

export default PatientDetails