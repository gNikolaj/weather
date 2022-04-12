const Weather = ({temperature, city, country, weather}) => {
    return(
        <div>
            <h2>City: {city}</h2>
            <h2>Temperature: {temperature}</h2>
            <h2>Country: {country}</h2>
            <h2>Weather: {weather}</h2>
        </div>
    );
}

export default Weather;