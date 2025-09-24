import './Location.scss';


const Location = ({ weatherData }) => {
  return (
    <div className={"location-info"}>
        <p className="region">{weatherData ? weatherData.location.region : ""}</p>
        <p className="place">{weatherData ? weatherData.location.name : ""}</p>
        <p className="country">{weatherData ? weatherData.location.country : ""}</p>
    </div>
  )
}

export default Location