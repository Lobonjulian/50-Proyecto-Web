import { useState } from "react";
import "../../styles/form.css";

const Form = ({ isLandingPage = false }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "soporte",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregar la lógica para enviar el formulario
    console.log("Datos del formulario:", formData);
  };

  return (
    <section className="form-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        {!isLandingPage && (
          <>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              >
                <option value="soporte">Soporte técnico</option>
                <option value="consulta">Consulta general</option>
                <option value="sugerencia">Sugerencias</option>
                <option value="otro">Otros</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                required
              ></textarea>
            </div>
          </>
        )}

        <button type="submit" className="btn btn__button">
          {isLandingPage ? "Comenzar ahora" : "Enviar mensaje"}
        </button>
      </form>
    </section>
  );
};

export default Form;
