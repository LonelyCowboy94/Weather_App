import './DailyForecast.scss';

const DailyForecast = ({ weatherData, day }) => {

  const daily = weatherData ? weatherData.forecast.forecastday : [];
  
 

  return (
    <section className="daily-forecast-container">
          {daily.map((d, index) => (

            

            <div key={index} className="daily-forecast">

              <p className="days-of-week">
                {day[d.date ? new Date(d.date).getDay() : 0]}
              </p>
              
              <p className="daily-temperature-average">
                {d.day.avgtemp_c}<span>°C</span>
              </p>

              <img src={d.day.condition.icon} alt={d.day.condition.text} />
              </div>))}
    </section>
        ) 
  
}

export default DailyForecast