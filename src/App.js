import './App.css';
import Form from "./components/form/Form";
import Weather from "./components/weather/Weather";
import {useState} from "react";

function App() {

    const [temperature, setTemperature] = useState();
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    return (
        <div className="App">
            <Form temperature={setTemperature} city={setCity} weather={setWeather}/>
            {city && <Weather temperature={temperature} city={city} weather={weather}/>}
        </div>
    );
}

export default App;
