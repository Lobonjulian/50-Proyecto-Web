import { faker } from "@faker-js/faker";
import { OradoresData } from "@/utils/datos";
import Form from "@/components/ui/Form";
import Hero from "@/components/section/Hero";
import Oradores from "@/components/section/Oradores";

const OradoresPage = () => {
  const name = faker.person.fullName();

  return (
    <main className="bg-slate-100">
      <Hero
        titulo={"Oradores roomSyncConfig"}
        description={"Encuentro de Comunidad e Innovación"}
        className="flex text-white flex-wrap flex-col gap-4 bg-gradient-to-b from-purple-500 from-40%  via-purple-800 to blue-900"
      />

      <section className="flex justify-center mt-4">
        <img
          src={`https://i.pravatar.cc/500?u=${Math.random()
            .toString(36)
            .substr(2, 9)}`}
          alt={name}
          loading="lazzy"
          className="rounded"
        />
        <div className="flex flex-col gap-2 p-5 flex-wrap max-w-[608px] rounded bg-white border">
          <h3 className="font-bold">
            {OradoresData[0].OradorPrincipal.orador}
          </h3>
          <h2>{name}</h2>
          <h4 className="font-semibold">
            {OradoresData[0].OradorPrincipal.cargo}
          </h4>
          <p className="text-pretty max-w-[300px]">
            {OradoresData[0].OradorPrincipal.description}
          </p>
          {OradoresData[0].OradorPrincipal.presentacion.map(
            (presentacion, index) => (
              <div key={index}>
                <p className="font-bold">{presentacion.horario.hora}</p>
                <p className="font-bold">{presentacion.lugar.lugar}</p>
              </div>
            )
          )}
        </div>
      </section>

      <Oradores datosMap={OradoresData[0].oradores} />

      <section className="flex flex-col items-center">
        <Form
          titulo={"Sugiere un Orador"}
          description={
            "¿Conoces a alguien que podría ser un excelente orador para nuestra próxima edición?"
          }
        />
      </section>
    </main>
  );
};

export default OradoresPage;
