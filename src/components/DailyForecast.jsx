import './DailyForecast.scss';

const DailyForecast = ({ weatherData }) => {

  const day = weatherData ? weatherData.forecast.forecastday : [];

  return (
    <section className="daily-forecast-container">
          {day.map((d, index) => (
            <div key={index} className="daily-forecast">
              <p className="date">{d.date}</p>
              <p className="daily-temperature-average">{d.day.avgtemp_c}<span>°C</span></p>
              <img src={d.day.condition.icon} alt={d.day.condition.text} />
              </div>))}
    </section>
        ) 
  
}

export default DailyForecast