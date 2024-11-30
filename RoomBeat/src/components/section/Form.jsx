const Form = () => {
  
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" />
      </div>

      <div>
        <label>Correo:</label>
        <input type="email" />
      </div>

      <div>
      <label>Asunto</label>
      <select>
      <option>Soporte técnico</option>
      <option>Consulta general</option>
      <option>Sugerencias</option>
      <option>Otros</option>
      </select>
      </div>

      <div>
        <label>Mensaje:</label>
        <textarea></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
