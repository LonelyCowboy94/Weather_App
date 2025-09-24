import { useState, useEffect } from 'react';
import './WeatherDisplay.scss';
import Location from './components/Location';
import DailyForecast from './components/DailyForecast';



const WeatherDisplay = ({ day, month }) => {

    const API_KEY = 'dff687ecd56b4f8385c150116252409';
    const [hour, setHour] = useState(new Date().getHours());
    const [city, setCity] = useState('Novi Sad');
    const [weatherData, setWeatherData] = useState(null);

    


    useEffect(() => {
        const fetchWeatherData = async () => {
            const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&hour=${new Date().getHours()}`;
            const response = await fetch(API_URL);
            const data = await response.json();
            
           
            setWeatherData(data) 
            console.log(data);
            
        };

        fetchWeatherData();
        
    }, []);

    


  return (
    <section className={"weather-display"}>
        <div className="top-section">
            <div className={"current-temperature"}>
                <p>{weatherData ? weatherData.current.temp_c.toFixed() : ""}<span className={"degree"}>°C</span></p>
            </div>
            <Location 
            weatherData={weatherData}
            day={day}
            month={month}
            />
        </div>
        <DailyForecast weatherData={weatherData}/>
    </section>
  )
}

export default WeatherDisplay