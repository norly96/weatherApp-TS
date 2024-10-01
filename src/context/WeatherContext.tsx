import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getLocationRequest, getWeatherRequest } from "../api/axios";
import { WeatherData } from "../interface";

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
  data: WeatherData | undefined;
  getWeatherIcon: (weatherCode: number) => string;
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
  const [data, setData] = useState<WeatherData | undefined>(undefined);

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

  // Function for get data by latitude and longitude
  useEffect(() => {
    const getData = async () => {
      try {
        if (latitude !== undefined && longitude !== undefined) {
          const response = await getWeatherRequest(latitude, longitude);
          console.log(response.data);
          setData(response.data as WeatherData);
        }
        return;
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, [latitude]);

  // Function for images of weather code
  const getWeatherIcon = (weatherCode: number): string => {
    switch (weatherCode) {
      case 0:
      case 1:
        return "/images/wi_clear-day.svg";

      case 2:
        return "/images/wi_cloudy.svg";
      case 3:
        return "/images/wi_overcast.svg";
      case 45:
      case 48:
        return "/images/wi_fog.svg";
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return "/images/wi_drizzle.svg";
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
        return "/images/wi_rain.svg";
      case 71:
      case 73:
      case 75:
      case 77:
        return "/images/wi_snow.svg";
      case 85:
      case 86:
        return "/images/wi_sleet.svg";
      case 95:
      case 96:
      case 99:
        return "/images/wi_thunderstorms.svg";
      default:
        return "/images/wi_not-available.svg"; // Default for unknown weather codes
    }
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
        data,
        getWeatherIcon,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
