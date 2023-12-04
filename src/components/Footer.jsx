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
            src="assets/images/evolutionGymLogo.webp"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <a href="tel:+573122848693" target="_blank" rel="noreferrer" aria-label="numero de telefono gimnasio evolution fit cuba">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <a href="tel:+573054610299" target="_blank" rel="noreferrer" aria-label="numero de telefono gimnasio evolution fit dosquebradas">
                +57 (305) 461-0299
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-roboto text-sm text-center">REDES SOCIALES</h1>
        <div className="flex">
        <a
          href="https://wa.link/80vgy0"
          aria-label="Whatsapp gimnasio evolution fit pereira"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
           <img src="assets/images/icons/whatsapp-icon.svg" alt="Whatsapp gimnasio evolution fit pereira"></img>
        </a>
        <a
          href="https://www.instagram.com/evolutionfitper/"
          aria-label="Instagram gimnasio evolution fit cuba"
          target="_blank"
          className="mr-2"
          rel="noopener noreferrer"
        >
          <img src="assets/images/icons/instacuba-icon.svg" alt="Instagram Cuba gimnasio evolution fit pereira"></img>
        </a>
        <a
          href="https://es-la.facebook.com/atenas.fit.9/"
          aria-label="facebook gimnasio evolution fit cuba"
          target="_blank"
          className="mr-2"
          rel="noopener noreferrer"
        >
           <img src="assets/images/icons/facebook.svg" alt="Facebook gimnasio evolution fit pereira"></img>
        </a>
        <a
          href="https://www.instagram.com/evolutionfiteljapon/"
          aria-label="Instagram gimnasio evolution fit dosquebradas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/images/icons/instagram-icon.svg" alt="Instagram Dosquebradas gimnasio evolution fit pereira"></img>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
