import Titles from "@/components/Part/Titles";
import Card from "@/components/ui/Card";
import { PoliticasYPrivacidad } from "@/utils/datos";
import { FaCircleXmark } from "react-icons/fa6";


const Politicas = () => {
  return (
    <main className="py-6 px-5 flex flex-wrap flex-col items-center gap-2.5 bg-stone-100">
      <Titles
        etiqueta="h1"
        classNameEtiqueta="text-2xl font-bold text-center "
        titulo={"Código de Conducta de RoomBeat"}
        description={
          "Estableciendo un ambiente seguro, respetuoso e inclusivo para todos los participantes de nuestra comunidad."
        }
      />
      <section className="bg-white border-none rounded m-4  p-16 flex flex-col gap-8 ">
        <Titles
          titulo={"Nuestro Compromiso"}
          classNameEtiqueta={"text-xl font-bold"}
          description={
            "Como miembros de la comunidad de roomBeat, nos comprometemos a crear un entorno acogedor y respetuoso para todos los participantes. Hacemos lo posible para mantener este evento un lugar seguro y agradable para todos."
          }
        />
        <div className="flex flex-wrap gap-4">
          <Card datosMap={PoliticasYPrivacidad[0].compromiso} />        
        </div>
      </section>

      <section className="bg-white w-full border-none rounded m-4  p-16 flex flex-col gap-8 ">
        <h2>Comportamientos Inaceptables</h2>
        <ul>
          <li className="flex items-center gap-2"> <span className="text-red-600"><FaCircleXmark /></span> Acoso verbal o escrito de cualquier tipo</li>
          <li className="flex items-center gap-2"> <span className="text-red-600"> <FaCircleXmark /></span> Discriminación basada en género, orientación sexual, raza, religión o discapacidad</li>
          <li className="flex items-center gap-2"> <span className="text-red-600"> <FaCircleXmark /></span> Comportamiento intimidante o amenazante</li>
          <li className="flex items-center gap-2"> <span className="text-red-600"> <FaCircleXmark /></span> Fotografía o grabación sin consentimiento</li>
        </ul>
      </section>
    </main>
  );
};

export default Politicas;
