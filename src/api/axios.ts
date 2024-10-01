import axios from "axios";

const API_URL = import.meta.env.VITE_GEO_API_URL;
const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const geoClientAxios = axios.create({
  baseURL: API_URL,
});

export const baseClientAxios = axios.create({
  baseURL: API_BASE_URL,
});

export const getLocationRequest = async (name: string) =>
  geoClientAxios.get(`v1/search?name=${name}&count=1&language=en&format=json`);

export const getWeatherRequest = async (latitude: number, longitude: number) =>
  baseClientAxios.get(
    `v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto&forecast_days=4&daily=weather_code,temperature_2m_max`
  );
