import { API_URL } from "./config";

export type TSensor = {
  _id: string,
  pm25: string,
  humidity: string,
  so2: string,
  no2: string,
  co: string,
  o3: string,
  temperature: string,
  windDirection: string,
  windSpeed: string,
  date: String,
};

export async function getSensors(): Promise<TSensor[]> {
      const response = await fetch(`${API_URL}`);
      return response.json();
}