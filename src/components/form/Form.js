import './Form.css'

const Form = ({temperature, city, weather}) => {
    const API_KEY = '73c395f68c464eeec9bd8350ffa0461a';

    const getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();
            console.log(data);
            setInfo(data);
        }
    }

    function setInfo(data) {
        temperature(Math.round(data.main.temp - 273.15));
        city(data.name);
        weather(data.weather[0].main);
    }

    const changeInputColor = () => {
        let inp = document.querySelector('input');
        inp.style.backgroundColor = '#e8f0fe';
        if (inp.value === '') {
            inp.style.backgroundColor = '#A3D0C3';
        }
    }

    return(
        <div>
            <div className="form">
                <form onSubmit={getWeather}>
                    <input onChange={changeInputColor} type="text" name="city" placeholder="Enter city..."/>
                    <button><i className="fa-solid fa-magnifying-glass"/></button>
                </form>
            </div>
        </div>
    );
}

export default Form;