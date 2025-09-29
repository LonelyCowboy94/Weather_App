import { useRef, useState, useEffect } from "react";

import "./Wind.scss";

const Wind = ({ weatherData }) => {
  const windRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (weatherData && weatherData.current) {
      setAngle(weatherData.current.wind_degree);
    }
  }, [weatherData]);

  useEffect(() => {
    if (windRef.current) {
      windRef.current.setAttribute("transform", `rotate(${angle})`);
    }
  }, [angle]);

  return (
    <div className="compas">
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
          {weatherData ? weatherData.current.wind_kph : ""} kph
        </text>

        <polygon ref={windRef} points="100,35 110,70 100,60 90,70" fill="red" />

        <g stroke="black" strokeWidth="3" filter="url(#shadow)">
          <line x1="100" y1="10" x2="100" y2="30" />
          <g transform="rotate(30,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(60,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(90,100,100)">
            <line x1="100" y1="10" x2="100" y2="30" />
          </g>
          <g transform="rotate(120,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(150,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(180,100,100)">
            <line x1="100" y1="10" x2="100" y2="30" />
          </g>
          <g transform="rotate(210,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(240,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(270,100,100)">
            <line x1="100" y1="10" x2="100" y2="30" />
          </g>
          <g transform="rotate(300,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
          <g transform="rotate(330,100,100)">
            <line x1="100" y1="10" x2="100" y2="20" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Wind;
