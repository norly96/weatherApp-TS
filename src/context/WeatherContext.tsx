import { createContext, ReactNode, useContext, useState } from "react";
import { getLocationRequest } from "../api/axios";

interface WeatherContextProps {
  getLocation: (name: string) => void;
  latitude: number | undefined;
  longitude: number | undefined;
  country: string;
  name: string;
  isModalOpen: boolean;
  errorMessage: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
}

export const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("WeatherContext should be inside WeatherProvider");
  }
  return context;
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [latitude, setLat] = useState<number | undefined>(undefined);
  const [longitude, setLong] = useState<number | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [name, setName] = useState<string>("");

  // Function for find location
  const getLocation = async (name: string) => {
    try {
      const response = await getLocationRequest(name);
      console.log(response.data.results[0]);
      setLat(response.data.results[0].latitude);
      setLong(response.data.results[0].longitude);
      setCountry(response.data.results[0].country);
      setName(response.data.results[0].name);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Function for close the Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <WeatherContext.Provider
      value={{
        getLocation,
        latitude,
        longitude,
        country,
        name,
        isModalOpen,
        errorMessage,
        setName,
        setIsModalOpen,
        setErrorMessage,
        closeModal,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
