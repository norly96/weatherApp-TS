import axios from "axios";

const API_URL = import.meta.env.VITE_GEO_API_URL;

export const clientAxios = axios.create({
  baseURL: API_URL,
});

export const getLocationRequest = async (name: string) =>
  clientAxios.get(`v1/search?name=${name}&count=1&language=en&format=json`);
