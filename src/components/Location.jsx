import './Location.scss';
import SearchCity from "./SearchCity";


const Location = ({ weatherData, setCity, API_KEY }) => {


  return (
    <div 
    className={"location-info"}
    >

        <SearchCity 
        API_KEY={API_KEY}
        setCity={setCity}
        />

        <p className="country">{weatherData ? weatherData.location.country : ""}</p>

        <div className={"current-temperature"}>
                <p>{weatherData ? weatherData.current.temp_c.toFixed() : ""}<span className={"degree"}>°C</span></p>
        </div>

        <p>{weatherData ? weatherData.current.condition.text : ""}</p>

        
    </div>
  )
}

export default Location