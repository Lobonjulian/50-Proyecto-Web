const UrlMapa = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11264.804678667673!2d-76.23880806742864!3d3.420680189248406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1732914330257!5m2!1ses!2sco"

const Mapa = () => {
  return (
    <>
      <iframe
        allowFullScreen
        src={UrlMapa}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default Mapa;
