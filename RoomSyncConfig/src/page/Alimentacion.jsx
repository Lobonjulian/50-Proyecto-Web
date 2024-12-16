import Hero from "@/components/section/Hero";

const Alimentacion = () => {
  return (
    <main>
      <Hero
        titulo={"Servicios de Alimentación"}
        description={
          "Descubre nuestra variedad de opciones gastronómicas diseñadas para satisfacer todos los gustos y necesidades dietéticas."
        }
        className={
          "flex-wrap flex-col items-center gap-4 bg-gradient-to-b from-purple-500 via-purple-400  text-white"
        }
      />
    </main>
  );
};

export default Alimentacion;
