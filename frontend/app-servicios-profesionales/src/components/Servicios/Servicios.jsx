import ServiceCard from "../ServiceCard/ServiceCard";

const Servicios = () => {
  const servicios = [
    { servicio: "Jardinería", rutaIcono: "jardineria" },
    { servicio: "Fontanería", rutaIcono: "fontaneria" },
    { servicio: "Carpintería", rutaIcono: "carpinteria" },
    { servicio: "Cerrajería", rutaIcono: "cerrajeria" },
    { servicio: "Limpieza", rutaIcono: "limpieza" },
    { servicio: "Albañileria", rutaIcono: "albanileria" },
    { servicio: "Electricidad", rutaIcono: "electricidad" },
    { servicio: "Decoración", rutaIcono: "decoracion" },
    { servicio: "Mascotas", rutaIcono: "mascotas" },
    { servicio: "Reparaciones", rutaIcono: "reparaciones" },
  ];

  return (
    <section className="grid h-screen place-items-center">
      <div className="mx-auto w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[1440px] ">
          {servicios.map((servicio, index) => (
            <ServiceCard key={index} {...servicio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
