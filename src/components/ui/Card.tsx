import { useWeatherContext } from "../../context/WeatherContext";

const Card = () => {
  const { country, name, data } = useWeatherContext();

  const formatDate = (date: string) => {
    const time = new Date(date);
    return time.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Rotate Card */}
      <div className="absolute inset-0 transform rotate-6 bg-yellow-orange rounded-xl shadow-lg h-full w-full"></div>

      {/* Principal Card */}
      <div className="relative text-light-white bg-green-card rounded-xl shadow-xl p-6 h-full w-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-5xl font-bold">{name}</h2>
          <h3 className="text-gray-400 text-xl sm:text-2xl font-extrabold">
            {country}
          </h3>
        </div>

        <div className="flex items-center h-48 flex-wrap justify-center">
          {data !== undefined && (
            <>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-white/20 to-light-white z-10">
                {data.current.temperature_2m}&deg;
              </h1>
              <img
                src="images/logo.svg"
                alt=""
                className="z-20 w-24 sm:w-28 lg:w-36 h-auto"
              />
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col text-sm sm:text-lg items-center font-bold">
            <img
              src="images/logo.svg"
              alt=""
              className="w-16 sm:w-20 lg:w-full"
            />
            {data !== undefined && (
              <>
                <p className="text-gray-400">
                  {" "}
                  {formatDate(data.daily.time[1])}
                </p>
                <p>{data.daily.temperature_2m_max[1]}&deg;</p>
              </>
            )}
          </div>
          <div className="flex flex-col text-sm sm:text-lg items-center font-bold">
            <img
              src="images/logo.svg"
              alt=""
              className="w-16 sm:w-20 lg:w-full"
            />
            {data !== undefined && (
              <>
                <p className="text-gray-400">
                  {" "}
                  {formatDate(data.daily.time[2])}
                </p>
                <p>{data.daily.temperature_2m_max[2]}&deg;</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
