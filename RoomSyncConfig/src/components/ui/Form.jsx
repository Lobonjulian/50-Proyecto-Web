import { useState } from "react";

const Form = ({ titulo, description }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: ",",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col flex-wrap max-sm:px-2">
     <div className="flex flex-col flex-wrap">
      <h3 className="font-bold "> {titulo} </h3>
      {description && <p>{description}</p>}
      </div>
      <form className="pb-3" onSubmit={handleSubmit}>
        <div className="flex gap-2 py-8 items-center flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="border-none rounded-lg py-1 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@example"
              className="border-none rounded-lg py-1 px-2"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
