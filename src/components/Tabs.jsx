import { useState } from "react";
import claseData from "../data/clases.json";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Lun");
  const [activeH, setActiveH] = useState("diurno");

  const handleClick = (day) => {
    setActiveTab(day);
  };

  const handleSchedule = (time) => {
    setActiveH(time);
  };

  function renderClase(clase) {
    return (
      <>
        <div className="text-oscuro mx-28 max-sm:mx-10 max-sm:mt-16 max-sm:text-center py-7 mt-10">
          <h1 className="font-roboto font-semibold text-4xl mb-9">
            {clase.nombre}
          </h1>
          <p className="font-open font-thin text-lg md:text-xl leading-7 max-sm:mb-5">
            {clase.des}
          </p>
        </div>
        <img
          className="max-lg:hidden"
          src={clase.modelo}
          alt={clase.nombre}
        ></img>
      </>
    );
  }

  return (
    <div>
      <div className="w-full flex justify-center font-roboto mt-10">
        {["Lun", "Mar", "Mie", "Jue", "Vie"].map((day) => (
          <button
            key={day}
            aria-label="selecciona el día de la clase"
            className={`${
              activeTab === day ? "bg-amarillo" : "bg-oscuro"
            } text-white px-4 py-2 mr-2 rounded-lg hover:bg-amarillo transition-all duration-300`}
            onClick={() => handleClick(day)}
          >
            {day === "Mie" ? "Mie" : day}
          </button>
        ))}
      </div>
      <div className="w-full flex font-roboto pl-10 max-sm:mt-5 max-sm:justify-center">
        <button
          aria-label="selecciona el horario diurno"
          className={`${
            activeH === "diurno" ? "bg-amarillo" : "bg-oscuro"
          } text-white px-4 py-2 mr-2 rounded-lg hover:bg-amarillo transition-all duration-300`}
          onClick={() => handleSchedule("diurno")}
        >
          7:15 AM
        </button>
        <button
          aria-label="selecciona el horario nocturno"
          className={`${
            activeH === "nocturno" ? "bg-amarillo" : "bg-oscuro"
          } text-white px-4 py-2 mr-2 rounded-lg hover:bg-amarillo transition-all duration-300`}
          onClick={() => handleSchedule("nocturno")}
        >
          7:15 PM
        </button>
      </div>
      <div className="mt-4 flex justify-around w-full h-screen font-roboto">
        {activeTab === "Lun" && (
          <>
            {activeH === "diurno"
              ? renderClase(claseData.MILITAR)
              : renderClase(claseData.RUMBA)}
          </>
        )}
        {activeTab === "Mar" && (
          <>
            {activeH === "diurno"
              ? renderClase(claseData.CARDIOBOX)
              : renderClase(claseData.CROSSFIT)}
          </>
        )}
        {activeTab === "Mie" && (
          <>
            {activeH === "diurno"
              ? renderClase(claseData.RUMBA)
              : renderClase(claseData.GAP)}
          </>
        )}
        {activeTab === "Jue" && (
          <>
            {activeH === "diurno"
              ? renderClase(claseData.GAP)
              : renderClase(claseData.CARDIOBOX)}
          </>
        )}
        {activeTab === "Vie" && (
          <>
            {activeH === "diurno"
              ? renderClase(claseData.ABS)
              : renderClase(claseData.RUMBA)}
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
