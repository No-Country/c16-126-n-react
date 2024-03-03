import React from "react";
import NosotrosCard from "../../components/NosotrosCard/NosotrosCard";

export default function QuienesSomosPage() {
  const devs = [
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/106778830?v=4",
      nombre: "Laura Marcela Rozo Rodriguez",
      rol: "Tester QA - Diseño UI/UX ",
      linkedinUrl: "https://www.linkedin.com/in/laura-rozorodriguez/",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/109558787?v=4",
      nombre: "Franco Martí­n Ojeda",
      rol: "BackEnd Developer",
      linkedinUrl: "https://www.linkedin.com/in/sebastiangallegocanon/",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/101590889?v=4",
      nombre: "Sebastian Gallego",
      rol: "FrontEnd Developer",
      linkedinUrl: "https://www.linkedin.com/in/franco-ojeda-5470b399",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/54607894?v=4",
      nombre: "Eduardo Hidalgo",
      rol: "FrontEnd Developer",
      linkedinUrl: "https://www.linkedin.com/in/eduardo-antonio-hidalgo/",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/128101914?v=4",
      nombre: "Gabriel Taboada",
      rol: "FrontEnd Developer",
      linkedinUrl: "",
    },
  ];

  return (
    <div className="bg-blue-100  ">
      <div className="flex flex-col  mx-auto">
        <header className="bg-blue-500 flex  ">
          <div className="flex items-center flex-grow mx-auto container justify-between">
            <p className="text-white text-2xl mx-auto p-4 font-bold">
              Equipo c16-126-n-react
            </p>
          </div>
        </header>

        <main className="flex flex-col items-center justify-start mx-auto container mt-8">
          {" "}
          <h2 className="text-3xl m-4 font-bold">Sobre Nuestro Equipo:</h2>
          <p className="text-2xl mb-4 font-semibold leading-9">
            Nuestro equipo de desarrollo web está compuesto por profesionales
            apasionados y altamente capacitados, cada uno aportando habilidades
            únicas para garantizar el éxito de nuestro proyecto. A continuación,
            presentamos a los miembros clave de nuestro equipo:
          </p>
          <h2 className="m-3 text-2xl leading-9">
            <p className="text-2xl mb-2 font-semibold ">
              Diseño UI/UX y Testing (Laura Marcela Rozo Rodriguez) :
            </p>
            Nuestra experta en diseño UI/UX se encarga de crear una experiencia
            de usuario intuitiva y atractiva. Además, Laura también desempeña un
            papel crucial en las pruebas de usuario, garantizando que cada
            función y característica funcione sin problemas y cumpla con las
            expectativas.
          </h2>
          <h2 className="m-3 text-2xl leading-9">
            <p className="text-2xl mb-2 font-semibold ">
              Backend (Franco Martí­n Ojeda) :
            </p>
            Nuestro desarrollador backend es el arquitecto detrás de la
            funcionalidad principal de la aplicación. Se encarga de construir y
            mantener la infraestructura que respalda la lógica del negocio, la
            gestión de datos y la comunicación con la base de datos.
          </h2>
          <h2 className="m-3 text-2xl leading-9">
            <p className="text-2xl mb-2 font-semibold ">
              Frontend (Eduardo Hidalgo, Gabriel Taboada, Sebastian Gallego) :
            </p>
            Nuestro equipo de desarrollo frontend se compone de tres
            profesionales altamente capacitados y creativos. Trabajan en la
            interfaz de usuario visible para los usuarios finales, implementando
            diseños elegantes y garantizando una navegación fluida.
          </h2>
          <h2 className="text-3xl my-10 font-bold">Sobre el Proyecto </h2>
          <p className="text-2xl m-4 font-semibold mb-10 leading-9">
            La aplicación que estamos construyendo tiene como objetivo conectar
            a usuarios con proveedores de servicios de mantenimiento para el
            hogar. Por ejemplo, si un usuario necesita un electricista, puede
            buscar en la aplicación y seleccionar profesionales según su
            ubicación, evaluaciones de otros usuarios y comentarios. La
            aplicación proporcionará una plataforma eficiente para facilitar la
            búsqueda, la reserva y la evaluación de profesionales del hogar,
            mejorando así la accesibilidad y la confiabilidad de los servicios
            de mantenimiento.
          </p>
        </main>

        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto container">
          {devs.map((dev, index) => (
            <NosotrosCard key={index} {...dev} />
          ))}
        </div>
      </div>
    </div>
  );
}
