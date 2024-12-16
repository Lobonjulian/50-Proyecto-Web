import CuentaRegresiva from "@/components/section/CuentaRegresiva";
import Eventos from "@/components/section/Eventos";
import Hero from "@/components/section/Hero";
import Oradores from "@/components/section/Oradores";
import HeroImagen from "@/assets/img/HeroImage.webp";
import { HomeData } from "@/utils/Datos";

const Home = () => {
  return (
    <main>
      <Hero
        titulo={"Bienvenidos a RoomSyncConfig 2025"}
        description={"Un evento global para los entusiastas de RoomBeat"}
        HeroImg={HeroImagen}
        btnName={"Compra tus boletos"}
        className={
          "pl-4 flex justify-between items-center gap-4 bg-gradient-to-r from-fuchsia-500 from-50% via-purple-300 to-blue-300 "
        }
      />
      <Oradores
        titulo={"Oradores Destacados"}
        subtitulo={"Conoce a nuestros expertos"}
        datosMap={HomeData}
      />
      <CuentaRegresiva />
      <Eventos />
    </main>
  );
};

export default Home;
