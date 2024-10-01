import SearchInput from "./ui/SearchInput";
import { ToggleDarkMode } from "./ui/ToggleDarkMode";

const SectionLeft = () => {
  return (
    <div className="flex flex-col px-4 sm:px-32 py-16">
      <div className="flex flex-wrap justify-center sm:justify-between items-center">
        {/* Logo */}
        <div className="hidden sm:flex items-center ">
          <img src="/images/logo.svg" className="w-16" alt="" />
          <h1 className="text-black dark:text-light-white text-4xl font-bold">
            WeatherApp
          </h1>
        </div>
        {/* ToggleDarkMode */}
        <ToggleDarkMode />
      </div>
      <div className="flex flex-col gap-10 items-center mt-16">
        {/* Title */}
        <h1 className="text-black  dark:text-light-white text-center text-5xl lg:text-7xl font-bold">
          Weather and Forecast Application
        </h1>
        {/* Description */}
        <h2 className="text-gray-500 text-center text-xl lg:text-2xl">
          Easily track current weather conditions and forecasts for the upcoming
          days by searching for any city around the world. Our app, powered by
          the Open Meteo API, delivers accurate and up-to-date information,
          including temperature, weather codes, and real-time data adjusted to
          your local timezone.
        </h2>
        {/* InputSearch */}
        <SearchInput />
      </div>
    </div>
  );
};

export default SectionLeft;
