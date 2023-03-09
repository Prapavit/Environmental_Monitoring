import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom';
import { TSensor, getSensors } from './api/getSensors';
import { createSensor } from './api/createSensor';


function App() {
  const [sensors, setSensors] = useState<TSensor[]>([]);
  const [pm25, setPM25] = useState("");
  const [temperature, setTemperature] = useState("");
  const [so2, setSO2] = useState("");
  const [no2, setNO2] = useState("");
  const [co, setCO] = useState("");
  const [o3, setO3] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");


  async function handleCreateSensor(e: React.FormEvent){
    e.preventDefault();
    const sensor = await createSensor(
      pm25,
      humidity,
      so2,
      no2,
      co,
      o3,
      temperature,
      windDirection,
      windSpeed,
      )

    setSensors([...sensors, sensor])
    setPM25("");
    setTemperature("");
    setSO2("");
    setNO2("");
    setCO("");
    setO3("");
    setWindDirection("");
    setWindSpeed("");
    setHumidity("");
  };

  useEffect(() => {
    async function fetchSensor(){
      const newSensors = await getSensors();
      setSensors(newSensors);
    }
    fetchSensor();
  }, []); 

  return (
    <div className="App">
      <div className="sensors">
        {
          sensors.map((sensor) => (
            <li key={sensor.pm25}>
              <button>O</button>
              <Link to={`sensors/${sensor.pm25}`}>{sensor.pm25}{sensor.date}{sensor.so2}</Link>
            </li>
          ))
        }
      </div>
      <form onSubmit = {handleCreateSensor} >
        <label htmlFor="sensor-value">Sensor value</label>
        <input 
        id="sensor-value"
        value={pm25}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPM25(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={temperature}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTemperature(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={so2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSO2(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={no2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNO2(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={co}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCO(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={o3}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setO3(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={windDirection}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setWindDirection(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={windSpeed}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setWindSpeed(e.target.value);
        }}/>
        <input 
        id="sensor-value"
        value={humidity}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setHumidity(e.target.value);
        }}/>
        <button>Create Sensor</button>
      </form>
    </div>
    )
}

export default App
