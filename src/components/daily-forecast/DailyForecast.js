import './DailyForecast.css'
import ListItem from "../list-item/ListItem";

const DailyForecast = ({dailyData}) => {
    let days = [];
    let degrees = [];
    let description = [];

    function getDays() {
        const list = dailyData.list;

        list.forEach((item, i) => {
            if (i % 8 === 0) {
                let tmp = new Date(item.dt_txt);
                let tmpDate = tmp.getDate();
                if (i === 0) {
                    days.push('Today');
                } else {
                    days.push(tmp.toLocaleString('en-us', {weekday: 'long'}) + ' ' + tmpDate);
                }
                degrees.push(Math.round(item.main.temp));
                description.push(item.weather[0].main);
            }
        })
    }
    getDays();

    return(
        <div className="daily-forecast">
            <h2 className="daily-forecast-h2">Daily Forecast</h2>
            <ul className="daily-forecast-list">
                <ListItem day={days[0]} degree={degrees[0]} description={description[0]}/>
                <ListItem day={days[1]} degree={degrees[1]} description={description[1]}/>
                <ListItem day={days[2]} degree={degrees[2]} description={description[2]}/>
                <ListItem day={days[3]} degree={degrees[3]} description={description[3]}/>
                <ListItem day={days[4]} degree={degrees[4]} description={description[4]}/>
            </ul>
        </div>
    );
}

export default DailyForecast;