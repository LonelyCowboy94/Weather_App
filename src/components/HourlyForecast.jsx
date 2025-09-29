import "./HourlyForecast.scss";

const HourlyForecast = ({ weatherData }) => {
  const hours = weatherData ? weatherData.forecast.forecastday[0].hour : [];
  const hoursNextDay = weatherData
    ? weatherData.forecast.forecastday[1].hour
    : [];
  const currentHour = new Date().getHours();
  const upcomingHours = hours.filter((hour) => {
    const hourNum = parseInt(hour.time.split(" ")[1].split(":")[0]);
    return hourNum >= currentHour;
  });

  const combinedHours = [...upcomingHours, ...hoursNextDay];
  const reducedHours = combinedHours.slice(0, 18);

  // Function reserved for future feature updates – triggers callback at midnight
  function runAtMidnight(callback) {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0
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

  const renderHourlyData = (day) => {
    return day.map((hour, index) => {
      const hourString = hour.time.split(" ")[1].split(":")[0];
      const hourNumber = parseInt(hourString, 10);
      const ampm = hourNumber >= 12 ? "PM" : "AM";
      const displayHour = hourNumber % 12 === 0 ? 12 : hourNumber % 12;

      return (
        <div className="hourly-forecast-card" key={index}>
          <p>
            {displayHour} <span>{ampm}</span>
          </p>
          {weatherData?.current?.condition?.icon && (
            <img
              src={hour.condition.icon}
              alt={hour.condition.text || "Weather icon"}
            />
          )}

          <p className="temperature-in-hour" key={index}>
            {hour.temp_c.toFixed()}
            <span>°</span>
          </p>
          <p className="hourly-chance-of-rain">{hour.chance_of_rain !== 0 ? hour.chance_of_rain + "%" : ""}</p>
        </div>
      );
    });
  };

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-card">
        <p>Now</p>
        {weatherData?.current?.condition?.icon && (
          <img src={weatherData.current.condition.icon} alt="Weather icon" />
        )}
        <p className="temperature-in-hour">
          {weatherData ? weatherData.current.temp_c.toFixed() : ""}
          <span>°</span>
        </p>
      </div>

      <div className="todays-forecast-card">
        {renderHourlyData(reducedHours)}
      </div>
    </div>
  );
};

export default HourlyForecast;
