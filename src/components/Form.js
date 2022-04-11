import {useState} from "react";
import Weather from "./Weather";

const Form = () => {
    const API_KEY = '73c395f68c464eeec9bd8350ffa0461a';

    const [temperature, setTemperature] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [weather, setWeather] = useState();

    const getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();
            setInfo(data);
        }
    }

    function setInfo(data) {
        setTemperature(Math.round(data.main.temp - 273.15));
        setCity(data.name);
        setCountry(data.sys.country);
        setWeather(data.weather[0].main);
    }

    return(
        <div>
            <div>
                <form onSubmit={getWeather}>
                    <input type="text" name="city" placeholder="City"/>
                    <button>Check</button>
                </form>
            </div>
            {city && <Weather temperature={temperature} city={city} country={country} weather={weather}/>}
        </div>
    );
}

export default Form;