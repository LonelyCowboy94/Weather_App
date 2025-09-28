import "./DailyInfo.scss";

const DailyInfo = ({ weatherData }) => {
  return (
    <section className="daily-info">
      <div className="weather-details">
        <p>
          Feels like{" "}
          <span>
            {weatherData ? weatherData.current.feelslike_c.toFixed() : ""} °C
          </span>
        </p>
        <p>
          Humidity{" "}
          <span>{weatherData ? weatherData.current.humidity : ""} %</span>
        </p>
        <p>
          Atmospheric pressure{" "}
          <span>{weatherData ? weatherData.current.pressure_mb : ""} mb</span>
        </p>
        <p>
          Wind{" "}
          <span>
            {weatherData ? weatherData.current.wind_kph.toFixed() : ""}
          </span>
          &nbsp;kph
        </p>
      </div>
    </section>
  );
};

export default DailyInfo;
