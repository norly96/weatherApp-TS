import SearchInput from "./ui/SearchInput";
import { ToggleDarkMode } from "./ui/ToggleDarkMode";

const SectionLeft = () => {
  return (
    <div className="flex flex-col px-32 py-16">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
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
        <h1 className="text-black dark:text-light-white text-center text-7xl font-extrabold">
          Weather and Forecast Application
        </h1>
        {/* Description */}
        <h2 className="text-gray-500 text-center text-2xl">
          Use weather application and get weather information daily and daily.
        </h2>
        {/* InputSearch */}
        <SearchInput />
      </div>
    </div>
  );
};

export default SectionLeft;
