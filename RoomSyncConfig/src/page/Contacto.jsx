import Form from "@/components/ui/Form";
import Titles from "@/components/Part/Titles";

const ContactoPage = () => {
  return (
    <main className="bg-purple-200 items-center flex flex-col justify-center">
      <Titles
        classNameEtiqueta="text-xl font-bold text-center "
        etiqueta="h1"
        titulo={"Contacto - Conferencia roomSyncConfig 2025"}
        description={
          "Estamos aquí para ayudarte con cualquier consulta sobre la conferencia"
        }
      />
      <Form titulo={"Formulario de Contacto"} />
    </main>
  );
};

export default ContactoPage;
