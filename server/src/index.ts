import {config} from 'dotenv';
config();
import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import SensorModel from './models/Sensor';


const PORT = 5000;

const app = express();

app.use(cors(
  {origin: "*",}
));
app.use(express.json());


mongoose.connect(process.env.MONGO_URL!)
.then((res) => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Environmental Monitoring listening on port ${PORT}`);
          });
    })
//Post Sensor To Database API
app.post('/sensor', async (req: Request, res: Response) => {
  const newSensor = new SensorModel({
    pm25: req.body.pm25,
    humidity: req.body.humidity,
    so2: req.body.so2,
    no2: req.body.no2,
    co: req.body.co,
    o3: req.body.o3,
    temperature: req.body.temperature,
    windDirection: req.body.windDirection,
    windSpeed: req.body.windSpeed,
    date: Date.now(),
  });
  const sensorResponse = await newSensor.save();
  res.json(sensorResponse);
});

app.get('/sensor', async (req: Request, res: Response) => {
  const sensor = await SensorModel.find();
  console.log(sensor);
  res.json(sensor);
});

app.get('/sensor', async (req: Request, res: Response) => {
    res.send('123Hello World!');
});





