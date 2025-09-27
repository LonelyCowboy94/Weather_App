import './DailyForecast.scss';

const DailyForecast = ({ weatherData, day }) => {

  const daily = weatherData ? weatherData.forecast.forecastday : [];
  


  return (
    <section className="daily-forecast-container">
          {daily.map((d, index) => (

            
            
            
            <div key={index} className="daily-forecast">

              <div className="daily-forecast-left-container">
                <p className="days-of-week">
                  {day[d.date ? new Date(d.date).getDay() : 0]}
                </p>

                {weatherData?.current?.condition?.icon && (
                  <img 
                    src={d.day.condition.icon} 
                    alt={d.day.condition.text || "Weather icon"} 
                  />
                  
                )}

                <p className="daily-temperature-average">
                  {d.day.avgtemp_c.toFixed()}<span>°C</span>
                </p>

              </div>
              
              <div className="daily-forecast-right-container">
                
                <p>{d.day.mintemp_c.toFixed()}°</p>

                
                <input
                type="range"
                className="temp-range"
                value={d.day.avgtemp_c}
                min={d.day.mintemp_c}
                max={d.day.maxtemp_c}
                readOnly
                style={{
                  background: `linear-gradient(to right, dodgerblue 0%, #4518c279 ${d.day.avgtemp_c}%, #d13c01a4 ${d.day.avgtemp_c +35}%, #546baaff 90%)`,
                  width: "200px",
                  height: "8px",
                  borderRadius: "4px",
                  appearance: "none"
                }}
/>

            

                <p>{d.day.maxtemp_c.toFixed()}°</p>

                

              </div>

            </div>
            
            ))}
    </section>
        ) 
  
}

export default DailyForecast