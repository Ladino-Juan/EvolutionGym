import Gallery from "../components/Gallery";

const SedeDosq = () => {
  const mapSrc = `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3975.741994585803!2d-75.6767198852372!3d4.814303796503921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDgnNTEuNSJOIDc1wrA0MCcyOC4zIlc!5e0!3m2!1sen!2sco!4v1685833928593!5m2!1sen!2sco" width="600px" height="400px" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade""></iframe>`;
  return (
    <>
      <div className="w-full h-screen relative overflow-hidden custom-gradient flex justify-center items-center max-md:flex-col">
        <div className="absolute -top-80 right-[-60%] max-sm:right-[-55%] bg-yellow-400 w-3/4 h-3/4 transform rotate-[141.03deg] mx-auto"></div>
        <div
          dangerouslySetInnerHTML={{ __html: mapSrc }}
          className="rounded-2xl overflow-hidden max-sm:w-[90%] pl-0 sm:pl-10 pb-11 z-[4]"
        />
        <div className=" text-white md:w-[687px] mx-5 md:mx-auto md:ml-32 text-center md:text-left relative">
          <h1 className="font-roboto font-extralight italic text-4xl md:text-6xl mb-9">
            Sede Dosquebradas
          </h1>
          <p className="font-open font-light text-lg md:text-2xl">
            ¡Descubre la evolución del fitness en nuestra nueva sede, Evolution
            Gym! Con equipos de última generación, entrenadores expertos y un
            ambiente inspirador, te ayudaremos a alcanzar tus metas de forma
            divertida y efectiva. ¡Únete hoy y comienza tu transformación!
          </p>
        </div>

        <div className="absolute text-white text-center bg-oscuro h-32 w-screen bottom-0 z-[2] flex justify-around items-center font-roboto max-sm:flex-col py-5">
          <h1>Horarios</h1>
          <div>
            <h1>Lunes a viernes</h1>
            <p>5 AM - 10 PM</p>
          </div>
          <div>
            <h1>Sábados y festivos</h1>
            <p>8 AM - 1 PM</p>
          </div>
        </div>
      </div>
      <Gallery sede="dosq"/>
    </>
  );
};

export default SedeDosq;
