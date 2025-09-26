import { useState, useEffect } from 'react';
import './WeatherDisplay.scss';
import Location from './components/Location';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';
import DailyInfo from './components/DailyInfo';


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
    <section className={"weather-display"}>

        <p className="region">{weatherData ? weatherData.location.region : ""}</p>

        <div className="top-section">
            
            <Location 
            weatherData={weatherData}
            day={day}
            month={month}
            setCity={setCity}
            />
            
            <DailyInfo 
            weatherData={weatherData}
            />
            
        </div>

        <div className='bottom-section'>
        

        
        

        <HourlyForecast 
        weatherData={weatherData}
        />
        
        <DailyForecast 
        weatherData={weatherData}
        day={day}
        />
        </div>
       
    </section>
  )
}

export default WeatherDisplay
