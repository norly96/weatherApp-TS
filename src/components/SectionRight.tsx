import { useWeatherContext } from "../context/WeatherContext";
import Card from "./ui/Card";

const SectionRight = () => {
  const { data } = useWeatherContext();
  return (
    <div className="lg:px-20 h-full">
      <div className="bg-dark-beige rounded-lg py-20 h-full w-auto">
        {data === undefined ? <h1>Esta vacio</h1> : <Card />}
      </div>
    </div>
  );
};

export default SectionRight;
