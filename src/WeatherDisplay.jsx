import { useState, useEffect } from 'react';
import './WeatherDisplay.scss';
import Location from './components/Location';
import DailyForecast from './components/DailyForecast';


const WeatherDisplay = ({ day, month }) => {

    const API_KEY = 'ea9257a20a744a32a7d221850252509';
    const [city, setCity] = useState('Novi Sad');
    const [weatherData, setWeatherData] = useState(null);

    


  useEffect(() => {
    const fetchWeatherData = async () => {
        try {
            const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&hour=${new Date().getHours()}`;
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            setWeatherData(null); 
        }
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
