import './CurrentForecast.css'

const CurrentForecast = ({temperature, city, weather}) => {
    return(
        <div className='weather-content'>
            <h2 className='city'>{city}</h2>
            <h2 className='temperature'>{temperature}&#8451;</h2>
            <h2 className='current-details'>{weather}</h2>
        </div>
    );
}

export default CurrentForecast;