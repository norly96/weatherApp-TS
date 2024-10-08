import { useWeatherContext } from "../context/WeatherContext";
import Card from "./ui/Card";

const SectionRight = () => {
  const { data } = useWeatherContext();
  return (
    <div className="lg:px-20 h-full">
      <div className="bg-dark-beige rounded-lg py-20 h-full w-auto">
        {data === undefined ? (
          <h1 className="h-full w-full text-transparent bg-clip-text bg-gradient-to-t from-black/40 to-black dark:from-white/50 dark:to-light-white text-center text-4xl xl:text-9xl font-bold flex items-center justify-center">
            Empty data
          </h1>
        ) : (
          <Card />
        )}
      </div>
    </div>
  );
};

export default SectionRight;
