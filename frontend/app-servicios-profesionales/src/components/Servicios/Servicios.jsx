import ServiceCard from "../ServiceCard/ServiceCard";

const Servicios = () => {
  const servicios = [
    { servicio: "Jardinería", rutaIcono: "jardineria" },
    { servicio: "Fontanería", rutaIcono: "fontaneria" },
    { servicio: "Carpintería", rutaIcono: "carpinteria" },
    { servicio: "Cerrajería", rutaIcono: "cerrajeria" },
    { servicio: "Limpieza", rutaIcono: "limpieza" },
    { servicio: "Albañilería", rutaIcono: "albanileria" },
    { servicio: "Electricidad", rutaIcono: "electricidad" },
    { servicio: "Decoración", rutaIcono: "decoracion" },
    { servicio: "Mascotas", rutaIcono: "mascotas" },
    { servicio: "Reparaciones", rutaIcono: "reparaciones" },
  ];

  return (
    <section className="text-center mt-20">
      <p className="text-4xl text-blue-800 font-bold text-wrap">
        Nuestros Servicios
      </p>

      <div className="mx-auto container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {servicios.map((servicio, index) => (
            <ServiceCard key={index} {...servicio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
