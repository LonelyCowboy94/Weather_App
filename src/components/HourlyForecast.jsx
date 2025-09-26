import './HourlyForecast.scss'

const HourlyForecast = ({ weatherData }) => {

    const hours = weatherData ? weatherData.forecast.forecastday[0].hour : [];
    // const hoursNextDay = weatherData ? weatherData.forecast.forecastday[1].hour : [];

    function runAtMidnight(callback) {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, 
    0, 0, 0, 0       
  );

  const msUntilMidnight = nextMidnight - now;

  setTimeout(() => {
    callback();       

    
    setInterval(callback, 24 * 60 * 60 * 1000);
  }, msUntilMidnight);
}


runAtMidnight(() => {
  console.log("Novo jutro! 🌅", new Date());
});

  return (
    <div className="hourly-forecast">

                  <div className="hourly-forecast-card">
                    <p>Now</p>
                    <img src={weatherData ? weatherData.current.condition.icon : ""} alt={weatherData ? weatherData.current.condition.text : ""} />
                    <p>{weatherData ? weatherData.current.temp_c.toFixed() : ""}<span>°</span></p>
                  </div>

        {hours.map((hour, index) => {

            
            const hourString = hour.time.split(" ")[1].split(":")[0]; 
            const hourNumber = parseInt(hourString, 10); 
            const ampm = hourNumber >= 12 ? "PM" : "AM";
            const displayHour = hourNumber % 12 === 0 ? 12 : hourNumber % 12;
            const now = new Date().getHours();

            
           
           
            return (
            hourNumber > now ?
            
                <div
                className="hourly-forecast-card" 
                key={index}
                >
                    <p>{displayHour} <span>{ampm}</span></p>
                    <img src={hour.condition.icon} alt="" />
                    <p key={index}>{hour.temp_c.toFixed()}<span>°</span></p>
                </div>
            
             : ""
            )
            
            }
        )}
    </div>
  )
}

export default HourlyForecast