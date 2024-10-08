import { useState } from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import Modal from "./Modal";

const SearchInput = () => {
  const [nameCard, setnameCard] = useState<string>("");
  const {
    getLocation,
    setName,
    name,
    setErrorMessage,
    setIsModalOpen,
    isModalOpen,
  } = useWeatherContext();

  const handleSearch = () => {
    if (nameCard.trim() === "") {
      setErrorMessage("The field is empty");
      setIsModalOpen(true);
    } else {
      getLocation(nameCard);
      setName(name);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex justify-between xl:items-center w-full  bg-green-card rounded-full shadow-md overflow-hidden ">
      <input
        type="text"
        className="px-10 bg-inherit w-full py-4 text-md lg:text-xl text-light-white placeholder:text-light-white focus:outline-none"
        placeholder="Search..."
        value={nameCard}
        onChange={(e) => setnameCard(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="p-4">
        <img src="/images/search.svg" alt="Icon Search" className="h-8 w-8" />
      </button>
      {/* Error Modal */}
      {isModalOpen && <Modal />}
    </div>
  );
};

export default SearchInput;
