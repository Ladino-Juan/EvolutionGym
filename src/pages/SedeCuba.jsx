import Gallery from "../components/Gallery";
import Tabs from "../components/Tabs";

const SedeCuba = () => {
  const mapSrc = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15903.260009098529!2d-75.7352149!3d4.8017954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387d0ab49b6455%3A0x960eb5d076d9fec6!2sGIMNASIO%20EVOLUTION%20FIT!5e0!3m2!1sen!2sco!4v1685678886301!5m2!1sen!2sco" width="600px" height="400px" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`;
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
            Sede Cuba
          </h1>
          <p className="font-open font-light text-lg md:text-2xl">
            Descubre el corazón de la transformación en Evolution Fit.
            Experimenta la excelencia en fitness con instalaciones de
            vanguardia, programas exclusivos y un ambiente inspirador. Únete a
            nuestra familia y logra tus objetivos de forma excepcional.
          </p>
        </div>

        <div className="absolute text-white text-center bg-oscuro h-32 w-screen bottom-0 z-[2] flex justify-around items-center font-roboto max-sm:flex-col py-5">
          <h1>Horarios</h1>
          <div>
            <h1>Lunes a viernes</h1>
            <p>5 AM - 11 PM</p>
          </div>
          <div>
            <h1>Sábados y festivos</h1>
            <p>8 AM - 1 PM</p>
          </div>
        </div>
      </div>
      <Tabs />
      <Gallery sede="cuba"/>
    </>
  );
};

export default SedeCuba;
