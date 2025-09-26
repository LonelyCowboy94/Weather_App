import './DailyForecast.scss';

const DailyForecast = ({ weatherData, day }) => {

  const daily = weatherData ? weatherData.forecast.forecastday : [];
  
 

  return (
    <section className="daily-forecast-container">
          {daily.map((d, index) => (

            

            <div key={index} className="daily-forecast">

              <div>
                <p className="days-of-week">
                  {day[d.date ? new Date(d.date).getDay() : 0]}
                </p>

                {weatherData?.current?.condition?.icon && (
                  <img 
                    src={d.day.condition.icon} 
                    alt={d.day.condition.text || "Weather icon"} 
                  />
                )}
              </div>
              
              <p className="daily-temperature-average">
                {d.day.avgtemp_c}<span>°C</span>
              </p>

              

              </div>))}
    </section>
        ) 
  
}

export default DailyForecast