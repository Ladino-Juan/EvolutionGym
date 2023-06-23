import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';


const GymCard = (props) => {
  const navigate = useNavigate();

  const handleClick = (sede) => {
    if(sede === 'Evolution Fit'){
      navigate('/evolution_cuba')
    } else{
      navigate('/evolution_dosquebradas')
    }
  };

  return (
    <div
      onClick={() => handleClick(props.name)}
      className="flip-card mb-7 bg-gray-200 max-w-sm rounded-3xl overflow-hidden shadow-xl w-2/4 max-sm:w-[80%] h-96 cursor-pointer"
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white font-roboto p-5">
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <p className>{props.address}</p>
          </div>
        </div>
        <div className="flip-card-back bg-amarillo">
          <div className="font-roboto p-5 text-center text-white font-medium">
            <h2 className="text-sm">INCLUYE</h2>
            {props.info.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="mr-1">
                  <i className="fa-regular fa-square-check"></i>
                </div>
                <p>{item}</p>
              </div>
            ))}

            <h2 className="text-sm mt-4">VALOR</h2>
            <div className="flex items-center justify-center">
              <div className="mr-1">
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
              <h1>{props.precio} COP</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GymCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired,
  precio: PropTypes.string.isRequired,
};

export default GymCard;
