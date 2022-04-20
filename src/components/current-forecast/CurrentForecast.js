import './CurrentForecast.css'

const CurrentForecast = ({temperature, city, weather}) => {
    return(
        <div className='weather-content'>
            <h2>{city}</h2>
            <h2>{temperature}&#8451;</h2>
            <h2>{weather}</h2>
        </div>
    );
}

export default CurrentForecast;