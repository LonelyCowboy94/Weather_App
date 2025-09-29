import { useRef, useState, useEffect } from "react";

import "./Wind.scss";

const Wind = ({ weatherData }) => {
  const windDirection = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (weatherData && weatherData.current) {
      setAngle(weatherData.current.wind_degree);
    }
  }, [weatherData]);

  useEffect(() => {
    if (windDirection.current) {
      windDirection.current.setAttribute("transform", `rotate(${angle + 180})`);
    }
  }, [angle]);

  return (
    <section className="wind">
      <div className="info-list">
        <p>Wind Speed: <span>{weatherData ? weatherData.current.wind_kph : ""} kph</span></p>
        <p>Direction: <span>{weatherData ? weatherData.current.wind_degree + "° " + weatherData.current.wind_dir : ""}</span></p>
        <p>Temperature: <span>{weatherData ? weatherData.current.windchill_c + " °C" : ""}</span></p>
        <p>Pressure: <span>{weatherData ? weatherData.current.pressure_mb + " mb" : ""}</span></p>
        <p>Humidity: <span>{weatherData ? weatherData.current.humidity + " %" : ""}</span></p>
      </div>
      <div className="wind-info">
        <div className="compas">
          <p>N</p>
          <p>E</p>
          <p>S</p>
          <p>W</p>
          <svg
            className="circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="1"
                  dy="1"
                  stdDeviation="2"
                  floodColor="rgba(255, 255, 255, 0.5)"
                />
              </filter>
            </defs>

            <circle
              filter="url(#shadow)"
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="black"
              strokeWidth="5"
            />

            <text
              filter="url(#shadow)"
              x="100"
              y="100"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18"
              fill="white"
            >
              {weatherData ? weatherData.current.wind_kph.toFixed() : ""} kph
            </text>

            <polygon
              ref={windDirection}
              points="100,35 110,70 100,60 90,70"
              fill="red"
            />

            <g stroke="black" filter="url(#shadow)">
              {Array.from({ length: 72 }).map((_, i) => {
                const angle = i * 5;
                const isMajor = i % 9 === 0;
                const isWorldSide = i % 18 === 0;
                const strokeWidth = isWorldSide ? 2 : isMajor ? 1 : 0.5;
                const x1 = 100;
                const y1 = 10;
                const y2 = isWorldSide ? 35 : isMajor ? 25 : 20;
                return (
                  <g
                    key={i}
                    transform={`rotate(${angle},100,100)`}
                    strokeWidth={strokeWidth}
                  >
                    <line x1={x1} y1={y1} x2={x1} y2={y2} />
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Wind;
