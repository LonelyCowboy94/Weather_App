import { useState, useEffect } from 'react';
import './WeatherDisplay.scss';
import Location from './components/Location';
import DailyForecast from './components/DailyForecast';


const WeatherDisplay = ({ day, month }) => {

    const API_KEY = 'dff687ecd56b4f8385c150116252409';
    const [city, setCity] = useState('Novi Sad');
    const [weatherData, setWeatherData] = useState(null);

    


    useEffect(() => {
        const fetchWeatherData = async () => {
            const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&hour=${new Date().getHours()}`;
            const response = await fetch(API_URL);
            const data = await response.json();
            
           
            setWeatherData(data) 
            console.log(data);
            
        };

        fetchWeatherData();
        
    }, [city]);

    


  return (
    <section className={"weather-display"}>
        <div className="top-section">
            
            <Location 
            weatherData={weatherData}
            day={day}
            month={month}
            setCity={setCity}
            />

            <div className={"current-temperature"}>
                <p>{weatherData ? weatherData.current.temp_c.toFixed() : ""}<span className={"degree"}>°C</span></p>
            </div>

        </div>
        
        <DailyForecast 
        weatherData={weatherData}
        day={day}
        />
       
    </section>
  )
}

export default WeatherDisplay