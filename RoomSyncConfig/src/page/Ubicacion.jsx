import Hero from "@/components/section/Hero";

const Ubicacion = () => {
  return (
    <main>
      <Hero
        titulo={"Centro Valle del Pacífico"}
        description={"Palmira, Valle del Cauca, Colombia"}
        className={"bg-[url('@/assets/img/BgUbicacion.webp')] bg-cover flex-wrap"}
      />
    </main>
  );
};

export default Ubicacion;
