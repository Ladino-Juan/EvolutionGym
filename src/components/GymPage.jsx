import gymData from "../data/gymData.json";
import GymCard from "./GymCard";

const GymPage = () => {
  return (
    <div className="w-full flex justify-around items-center max-sm:flex-col">
      {gymData.map((gym) => (
        <GymCard
          key={gym.id}
          name={gym.name}
          address={gym.address}
          image={gym.image}
          info={gym.info}
          precio={gym.precio}
        />
      ))}
    </div>
  );
};

export default GymPage;
