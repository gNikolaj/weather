import Form from "./components/form/Form";
import CurrentForecast from "./components/current-forecast/CurrentForecast";
import {useState} from "react";
import DailyForecast from "./components/daily-forecast/DailyForecast";

function App() {
    const [temperature, setTemperature] = useState();
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const [dailyData, setDailyData] = useState();

    const background = document.querySelector("body");

    const setBackground = () => {
        if (weather) {
            if (weather === 'Rain') {
                background.style.backgroundImage = 'url(https://i.gifer.com/Vm7s.gif)';
            } else if (weather === 'Clouds') {
                background.style.backgroundImage = 'url(https://www.zastavki.com/pictures/1680x1050/2009/Nature_Clouds_Dark_clouds_016329_.jpg)';
            } else if (weather === 'Clear') {
                background.style.backgroundImage = 'url(https://kartinkin.net/uploads/posts/2021-07/1627480163_21-kartinkin-com-p-nebo-fon-tekstura-krasivo-22.jpg)';
            }
        }
    }
    setBackground();

    return (
        <div className="App">
            <Form temperature={setTemperature} city={setCity} weather={setWeather} dailyData={setDailyData}/>
            {city && <CurrentForecast temperature={temperature} city={city} weather={weather}/>}
            {city && <DailyForecast dailyData={dailyData}/>}
        </div>
    );
}

export default App;
