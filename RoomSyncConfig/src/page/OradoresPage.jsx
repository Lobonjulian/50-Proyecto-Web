import Hero from "@/components/section/Hero";
import Oradores from "@/components/section/Oradores";
import { OradoresData } from "@/utils/datos";

const OradoresPage = () => {
  return (
    <main>
      <Hero
        titulo={"Oradores roomSyncConfig"}
        description={"Encuentro de Comunidad e Innovación"}
        className="flex text-white flex-wrap flex-col gap-4 bg-gradient-to-b from-purple-500 from-40%  via-purple-800 to blue-900"
      />

      <Oradores datosMap={OradoresData[0].oradores} />
    </main>
  );
};

export default OradoresPage;
