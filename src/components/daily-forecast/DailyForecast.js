import './DailyForecast.css'

const DailyForecast = ({dailyData}) => {
    let days = [];
    let degrees = [];
    let description = [];

    console.log(dailyData);

    function getDays() {
        const list = dailyData.list;

        list.forEach((item, i) => {
            if (i % 8 === 0) {
                let tmp = new Date(item.dt_txt);
                days.push(tmp.toLocaleString('en-us', {weekday: 'long'}));
                degrees.push(Math.round(item.main.temp));
                description.push(item.weather[0].main);
            }
        })
    }
    getDays();
    console.log(days);
    console.log(degrees);
    console.log(description);

    return(
        <div className="daily-forecast">
            <h2 className="daily-forecast-h2">Daily Forecast</h2>
            <ul className="daily-forecast-list">
                <li className="list-elem">
                    <div className="li-content">
                        <h3>{days[0]}</h3>
                        <div className="degrees">
                            <span>{degrees[0]}&#8451;</span>
                        </div>
                        <div className="details">
                            <span>{description[0]}</span>
                        </div>
                    </div>
                </li>
                <li className="list-elem">
                    <div className="li-content">
                        <h3>{days[1]}</h3>
                        <div className="degrees">
                            <span>{degrees[1]}&#8451;</span>
                        </div>
                        <div className="details">
                            <span>{description[1]}</span>
                        </div>
                    </div>
                </li>
                <li className="list-elem">
                    <div className="li-content">
                        <h3>{days[2]}</h3>
                        <div className="degrees">
                            <span>{degrees[2]}&#8451;</span>
                        </div>
                        <div className="details">
                            <span>{description[2]}</span>
                        </div>
                    </div>
                </li>
                <li className="list-elem">
                    <div className="li-content">
                        <h3>{days[3]}</h3>
                        <div className="degrees">
                            <span>{degrees[3]}&#8451;</span>
                        </div>
                        <div className="details">
                            <span>{description[3]}</span>
                        </div>
                    </div>
                </li>
                <li className="list-elem">
                    <div className="li-content">
                        <h3>{days[4]}</h3>
                        <div className="degrees">
                            <span>{degrees[4]}&#8451;</span>
                        </div>
                        <div className="details">
                            <span>{description[4]}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default DailyForecast;