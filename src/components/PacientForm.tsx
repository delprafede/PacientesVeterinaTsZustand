import { useForm } from "react-hook-form";
import Errors from "./Errors";
import {  DraftPatient } from "../types/indes";
import { usePatienteStore } from "../store/store";

const PacientFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftPatient>();
  const { addPatient } = usePatienteStore();
  const onSubmit = (data : DraftPatient) => {
    addPatient(data)
  };
  return (
    <div className=" flex flex-col items-center">
      <h2 className=" text-2xl font-bold text-center mb-3">
        Seguimientos Pacientes
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Añade Pacientes Y{" "}
        <span className=" text-indigo-700">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full bg-white shadow-lg rounded-lg space-y-3 p-5 "
      >
        <div>
          <label className=" font-bold uppercase mb-2" htmlFor="paciente">
            Paciente
          </label>
          <input
            className="w-full p-3  border border-gray-100 rounded-sm"
            type="text"
            id="name"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "Nombre del Paciente es obligatorio",
              maxLength: { value: 20, message: "Maximo 20 caracteres" },
              minLength: { value: 4, message: "Minimo 4 caracteres" },
            })}
          />
          {errors.name && (
            <Errors>{errors.name?.message}</Errors>
          )}
        </div>
        <div>
          <label className=" font-bold uppercase" htmlFor="propietario">
            Propíetario
          </label>
          <input
            className="w-full p-3  border border-gray-100 rounded-lg"
            type="text"
            id="owner"
            placeholder="Nombre del Propietario"
            {...register("owner", {
              required: "Nombre del Paciente es obligatorio",
              maxLength: { value: 20, message: "Maximo 20 caracteres" },
              minLength: { value: 4, message: "Minimo 4 caracteres" },
            })}
          />
          {errors.owner && <Errors>{errors.owner?.message}</Errors>}
        </div>
        <div>
          <label className=" font-bold uppercase" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3  border border-gray-100 rounded-lg"
            type="email"
            id="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "Email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email invalido",
              },
            })}
          />
          {errors.email && <Errors>{errors.email?.message}</Errors>}
        </div>
        <div>
          <label className="font-bold uppercase" htmlFor="date">
            Fecha de alta
          </label>
          <input
            className="w-full p-3  border border-gray-100 rounded-lg"
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
              required: "La fecha es obligatoria",
            })}
          />
          {errors.date && <Errors>{errors.date?.message}</Errors>}
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Síntomas del paciente son obligatorios",
              maxLength: { value: 200, message: "Maximo 200 caracteres" },
              minLength: { value: 4, message: "Minimo 4 caracteres" },
            })}
          ></textarea>
          {errors.symptoms && (
            <Errors>{errors.symptoms?.message}</Errors>
          )}
        </div>
        <div>
          <input
            className=" uppercase font-bold text-white py-3 w-full bg-indigo-800 rounded-lg"
            type="submit"
            value={"Guardar Paciente"}
          />
        </div>
      </form>
    </div>
  );
};

export default PacientFrom;
// export default function PatientForm() {

//     return (
//       <div className="md:w-1/2 lg:w-2/5 mx-5">
//           <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

//           <p className="text-lg mt-5 text-center mb-10">
//               Añade Pacientes y {''}
//               <span className="text-indigo-600 font-bold">Administralos</span>
//           </p>

//           <form
//               className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
//               noValidate
//           >
//                 <div className="mb-5">
//                     <label htmlFor="name" className="text-sm uppercase font-bold">
//                         Paciente
//                     </label>
//                     <input
//                         id="name"
//                         className="w-full p-3  border border-gray-100"
//                         type="text"
//                         placeholder="Nombre del Paciente"
//                     />
//                 </div>

//                 <div className="mb-5">
//                   <label htmlFor="caretaker" className="text-sm uppercase font-bold">
//                       Propietario
//                   </label>
//                   <input
//                       id="caretaker"
//                       className="w-full p-3  border border-gray-100"
//                       type="text"
//                       placeholder="Nombre del Propietario"
//                   />
//                 </div>

//               <div className="mb-5">
//                 <label htmlFor="email" className="text-sm uppercase font-bold">
//                     Email
//                 </label>
//                 <input
//                     id="email"
//                     className="w-full p-3  border border-gray-100"
//                     type="email"
//                     placeholder="Email de Registro"
//                 />
//               </div>

//               <div className="mb-5">
//                   <label htmlFor="date" className="text-sm uppercase font-bold">
//                       Fecha Alta
//                   </label>
//                   <input
//                       id="date"
//                       className="w-full p-3  border border-gray-100"
//                       type="date"
//                   />
//               </div>

//               <div className="mb-5">
//                   <label htmlFor="symptoms" className="text-sm uppercase font-bold">
//                   Síntomas
//                   </label>
//                   <textarea
//                       id="symptoms"
//                       className="w-full p-3  border border-gray-100"
//                       placeholder="Síntomas del paciente"
//                   ></textarea>
//               </div>

//               <input
//                   type="submit"
//                   className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
//                   value='Guardar Paciente'
//               />
//           </form>
//       </div>
//     )
//   }
