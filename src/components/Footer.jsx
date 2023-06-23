const Footer = () => {
  return (
    <div
      className="w-full py-8 bottom-0 bg-amarillo flex justify-around items-center rounded-t-3xl max-sm:flex-col"
      id="contacto"
    >
      <div className="w-2/5 max-sm:w-[80%] max-sm:mb-5 font-roboto overflow-hidden">
        <div className="flex items-center mb-2">
          <img
            className="w-24 mr-3"
            src="assets/images/evolutionGymLogo.png"
            alt="evolution gym logo"
          ></img>
          <h1>MISIÓN Y VISIÓN</h1>
        </div>
        <p className="text-justify font-extralight text-sm">
          En Gimnasio Evolution, nuestra misión es transformar vidas a través
          del fitness y la superación personal. Creamos un entorno inspirador
          donde los miembros evolucionan física, mental y emocionalmente.
          Promovemos un estilo de vida activo y saludable con servicios de
          calidad, instalaciones modernas y un equipo comprometido. Como líderes
          en el fitness, buscamos ser el gimnasio preferido para aquellos que
          buscan un cambio real y duradero. Ofrecemos una comunidad sólida,
          experiencias de entrenamiento emocionantes, programas personalizados y
          tecnología de vanguardia, adaptándonos a las necesidades cambiantes de
          nuestros miembros para lograr su bienestar.
        </p>
      </div>
      <div className="font-roboto text-sm max-sm:mb-5">
        <h1>SEDE CUBA</h1>
        <p>Lunes a viernes: 5 AM - 11 PM</p>
        <p>Sábados y festivos: 8 AM - 1 PM</p>
        <div className="flex items-center mt-2">
          <div>
            <p>Canchas sintéticas el bernabeu</p>

            <div className="flex items-center">
              <div className="mr-2">
                <i className="fas fa-phone"></i>
              </div>
              <a href="tel:+573122848693" target="_blank" rel="noreferrer">
                +57 (312) 284-8693
              </a>
            </div>
          </div>
        </div>
        <h1 className="mt-5">SEDE DOSQUEBRADAS</h1>
        <p>Lunes a viernes: 5 AM - 10 PM</p>
        <p>Sábados y festivos: 8 AM - 1 PM</p>
        <div className="flex items-center mt-2">
          <div>
            <p>Barrio el Japón-Dosquebradas Cra 31 #8-10</p>
            <div className="flex items-center">
              <div className="mr-2">
                <i className="fas fa-phone"></i>
              </div>
              <a href="tel:+573054610299" target="_blank" rel="noreferrer">
                +57 (305) 461-0299
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-roboto text-sm text-center">REDES SOCIALES</h1>
        <a
          href="https://wa.link/80vgy0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp text-3xl mx-2 text-oscuro"></i>
        </a>
        <a
          href="https://www.instagram.com/evolutionfitper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram text-3xl mx-2 text-oscuro"></i>
        </a>
        <a
          href="https://es-la.facebook.com/atenas.fit.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook text-3xl mx-2 text-oscuro"></i>
        </a>
        <a
          href="https://www.instagram.com/evolutionfiteljapon/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <i className="fa-brands fa-instagram text-3xl mx-2 text-gray-50"></i>
        </a>
     
      </div>
    </div>
  );
};

export default Footer;
