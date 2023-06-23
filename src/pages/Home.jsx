import { ElfsightWidget } from "react-elfsight-widget";
import GymPage from "../components/gymPage";
import Carousel from "../components/Carousel";

const Home = () => {
 
  return (
    <>
      {/*Lading*/}
      <div className="w-full h-screen relative overflow-hidden custom-gradient flex justify-center items-center">
        <img
          className="absolute w-full h-screen object-cover block sm:hidden"
          src="assets/images/Battling_ropes.jpeg"
          alt="modelo fitness battle rope | Evolution gym Pereira"
        ></img>
        <div className="absolute hidden sm:block top-44 right-[-40%] bg-yellow-400 w-3/4 h-3/4 rounded-[368.594px] transform rotate-[141.03deg] mx-auto"></div>
        <div className="text-white md:w-[687px] mx-5 md:mx-auto md:ml-32 text-center md:text-left relative mt-80 sm:mt-0">
          <h1 className="font-roboto font-extralight italic text-4xl md:text-6xl mb-9">
            Transforma tú cuerpo
            <span className="hidden sm:block">en Evolution</span>
          </h1>
          <p className="font-open font-light text-lg md:text-2xl">
            ¡Clases grupales, entrenadores personalizados y maquinaria de alta
            calidad en nuestro gimnasio! ¡Únete hoy mismo y alcanza tus metas de
            fitness!
          </p>
          <div className="flex flex-col my-4">
            <a
              href="#contacto"
              className="px-8 py-3 border bg-oscuro hover:bg-white text-white font-semibold hover:text-oscuro border-oscuro hover:border-transparent rounded transition-all duration-300 sm:hidden block"
            >
              CONTACTO
            </a>
          </div>
        </div>
        <img
          className=" h-3/4 max-w-full mx-auto mr-32 hidden lg:block z-[1]"
          src="/assets/images/gymModel.png"
          alt="modelo de gimnasio | Evolution gym Pereira"
        ></img>
        <div className="absolute bg-oscuro h-24 w-screen bottom-0 z-[2] hidden sm:flex justify-around items-center">
          <img
            className="w-40"
            src="assets/images/hsLogo.webp"
            alt="Healthy Sports logo | Evolution gym Pereira"
          ></img>
          <img
            className="w-64"
            src="assets/images/mm.avif"
            alt="Muscle meds logo | Evolution gym Pereira"
          ></img>
          <img
            className="w-40"
            src="assets/images/onLogo.png"
            alt="Optimum nutrition logo | Evolution gym Pereira"
          ></img>
        </div>
      </div>

      {/*Nosotros seccion */}
      <div
        className="w-full h-[110%] bg-oscuro overflow-hidden relative flex items-center justify-between px-10 max-lg:flex-col"
        id="nosotros"
      >
        <div className="text-white w-2/4 max-sm:w-[90%] max-sm:mt-16 max-sm:text-center py-7">
          <h1 className="font-roboto font-semibold text-4xl mb-9">NOSOTROS</h1>
          <p className="font-open font-thin text-lg md:text-xl leading-7 max-sm:mb-5">
            Somos un gimnasio que busca el bienestar de nuestros clientes,
            brindando acompañamiento integral a sus objetivos, sueños y metas en
            este camino saludable ofrecemos excelentes equipos para entrenar con
            comodidad y clases grupales como rumbaterapia, cardio box y GAP o
            funcional para que todos puedan disfrutar.
          </p>
        </div>
        <Carousel />
    
      </div>

      {/*Servicios seccion */}
      <div className="w-full overflow-hidden bg-white mt-7" id="servicios">
        
        <ElfsightWidget widgetID="799fbdf3-d6b4-4ab9-a323-0df0c6ba0603" />
        <GymPage />
      </div>
    </>
  );
};

export default Home;
