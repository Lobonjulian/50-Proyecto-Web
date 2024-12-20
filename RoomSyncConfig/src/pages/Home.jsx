import { HomeData } from "@/data/Datos";
import CuentaRegresiva from "@/components/section/CuentaRegresiva";
import Eventos from "@/components/section/Eventos";
import HeroImagen from "@/assets/img/HeroImage.webp";
import Oradores from "@/components/section/Oradores";
import Hero from "@/components/section/Hero";

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
        datosMap={HomeData[0].oradores}
      />
      <CuentaRegresiva />
      <Eventos />
    </main>
  );
};

export default Home;
