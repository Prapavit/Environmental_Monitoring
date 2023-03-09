import { API_URL } from "./config";

export async function createSensor(
    pm25: string,
    humidity: string,
    so2: string,
    no2: string,
    co: string,
    o3: string,
    temperature: string,
    windDirection: string,
    windSpeed: string,
    ) {
    const response = await fetch(`${API_URL}/sensor`,{
        method:"POST",
        body:JSON.stringify({
          pm25,
          temperature,
          so2,
          no2,
          co,
          o3,
          windDirection,
          windSpeed,
          humidity,
        }),
        headers: { 
          "Content-Type": "application/json" 
        },
        
      });
      return response.json();
}