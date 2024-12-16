const Hero = ({ className, titulo, description, HeroImg, btnName }) => {
  return (
    <section className={className}>
      <aside className="px-5 py-32 flex flex-col items-start gap-4 ">
        <h1 className="text-3xl font-bold">
          {titulo !== "Bienvenidos a" ? (
            titulo
          ) : (
            <>
              <span className="flex">{titulo}</span>
              <span className="text-sky-300"> RoomSyncConfig 2025</span>
            </>
          )}
        </h1>
        <p className="text-lg">{description}</p>

        {btnName ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {btnName}
          </button>
        ) : (
          ""
        )}
      </aside>
        {HeroImg ? (
          <div className="flex justify-center items-center w-[720px]">
            <img src={HeroImg} alt="" loading="lazy" />
          </div>
        ) : (
          ""
        )}
    </section>
  );
};

export default Hero;
