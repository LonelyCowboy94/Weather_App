import { useState, useEffect } from 'react';
import './WeatherDisplay.scss';
import Location from './components/Location';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';


const WeatherDisplay = ({ day, month }) => {

    const API_KEY = 'ea9257a20a744a32a7d221850252509';
    const [city, setCity] = useState('Novi Sad');
    const [weatherData, setWeatherData] = useState(null);

    
    

  useEffect(() => {


    const fetchWeatherData = async () => {
        try {
            const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;


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
    <section style={{
        background: "url(https://images.unsplash.com/photo-1498496294664-d9372eb521f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }} className={"weather-display"}>
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

        <HourlyForecast 
        weatherData={weatherData}
        />
        
        <DailyForecast 
        weatherData={weatherData}
        day={day}
        />
       
    </section>
  )
}

export default WeatherDisplay
