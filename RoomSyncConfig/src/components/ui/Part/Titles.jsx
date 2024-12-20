const Titles = ({ titulo, description, etiqueta = "h2", classNameEtiqueta }) => {
  const EtiquetaTitulo = ({ children }) => {
    const Component = etiqueta;
    return <Component className={classNameEtiqueta}>{children}</Component>;
  };

  return (
    <div className="flex flex-col gap-2 ">
      <EtiquetaTitulo>{titulo}</EtiquetaTitulo>
      <p className="text-black text-center">{description}</p>
    </div>
  );
};

export default Titles;
