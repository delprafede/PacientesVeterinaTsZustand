Pacientes Veterinaria - React + TypeScript + Zustand + React Hook Form
Este proyecto es una aplicación de seguimiento de pacientes veterinarios desarrollada con React, TypeScript, Zustand para la gestión del estado, y React Hook Form para el manejo de formularios. La aplicación permite agregar, modificar y eliminar pacientes, así como visualizar la lista de pacientes registrados.

Características Principales
Gestión de Pacientes: Permite agregar, modificar y eliminar pacientes.
Validación de Formularios: Utiliza React Hook Form para manejar y validar los datos del formulario.
Persistencia de Datos: Los datos de los pacientes se almacenan en el almacenamiento local del navegador utilizando Zustand con persistencia.
Interfaz de Usuario: Diseño responsivo y moderno utilizando Tailwind CSS.
Notificaciones: Integración con react-toastify para mostrar notificaciones al usuario.
Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
TypeScript: Lenguaje de programación que añade tipos estáticos a JavaScript.
Zustand: Biblioteca de gestión de estado ligera y sencilla.
React Hook Form: Biblioteca para manejar formularios en React.
Tailwind CSS: Framework de CSS utilitario para diseñar interfaces de usuario.
Vite: Herramienta de construcción rápida para aplicaciones web modernas.
ESLint: Herramienta de linting para mantener un código limpio y consistente.
Estructura del Proyecto
src/components/: Contiene los componentes reutilizables de la aplicación.
PacientForm.tsx: Formulario para agregar y modificar pacientes.
PacientList.tsx: Lista de pacientes registrados.
PatientDetails.tsx: Detalles de un paciente específico.
Errors.tsx: Componente para mostrar mensajes de error.
src/store/: Contiene la lógica de gestión de estado con Zustand.
store.ts: Define el almacén de Zustand para manejar los pacientes.
src/types/: Define los tipos de TypeScript utilizados en la aplicación.
indes.ts: Tipos para Patient y DraftPatient.
src/App.tsx: Componente principal de la aplicación.
src/main.tsx: Punto de entrada de la aplicación.
src/index.css: Estilos globales de la aplicación utilizando Tailwind CSS.
Configuración del Proyecto
Dependencias
Dependencias Principales:

react: ^18.3.1
react-dom: ^18.3.1
react-hook-form: ^7.54.2
react-toastify: ^11.0.2
uuid: ^11.0.5
zustand: ^5.0.3
Dependencias de Desarrollo:

@vitejs/plugin-react-swc: ^3.5.0
tailwindcss: ^3.4.17
typescript: ~5.6.2
vite: ^6.0.5
Scripts
dev: Inicia el servidor de desarrollo con Vite.
build: Compila el proyecto para producción.
lint: Ejecuta ESLint para verificar el código.
preview: Previsualiza la aplicación compilada.
Instalación
Clona el repositorio:
bash
Insert Code
Run
Copy code
git clone https://github.com/tu-usuario/pacientesveterinaria-ts-zustand-useform.git
Navega al directorio del proyecto:
bash
Insert Code
Run
Copy code
cd pacientesveterinaria-ts-zustand-useform
Instala las dependencias:
bash
Insert Code
Run
Copy code
npm install
Inicia el servidor de desarrollo:
bash
Insert Code
Run
Copy code
npm run dev