const Form = ({ titulo, description }) => {
  return (
    <section>
      <h3 className="font-bold "> {titulo} </h3>
      {description && <p>{description}</p>}
      <form className="pb-3">
        <div className="flex gap-2 py-8 items-center">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="border-none rounded-lg py-1 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="name"
              placeholder="Example@example"
              className="border-none rounded-lg py-1 px-2"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">mensaje</label>
          <textarea></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Enviar</button>
      </form>
    </section>
  );
};

export default Form;
