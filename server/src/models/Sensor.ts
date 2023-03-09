import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const SensorSchema = new Schema({
    //no: ObjectId,
    pm25: String,
    humidity: String,
    so2: String,
    no2: String,
    co: String,
    o3: String,
    temperature: String,
    windDirection: String,
    windSpeed: String,
    date: Date,
});

const SensorModel   = mongoose.model("Sensor", SensorSchema);

export default SensorModel;
