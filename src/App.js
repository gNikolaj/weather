import './App.css';
import Form from "./components/form/Form";
import Weather from "./components/weather/Weather";
import {useState} from "react";
import DailyForecast from "./components/daily-forecast/DailyForecast";

function App() {
    const [temperature, setTemperature] = useState();
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const [dailyData, setDailyData] = useState();

    return (
        <div className="App">
            <Form temperature={setTemperature} city={setCity} weather={setWeather} dailyData={setDailyData}/>
            {city && <Weather temperature={temperature} city={city} weather={weather}/>}
            {city && <DailyForecast dailyData={dailyData}/>}
        </div>
    );
}

export default App;
