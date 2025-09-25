import { useState } from "react";
import './Location.scss';


const Location = ({ weatherData, setCity }) => {

  const place = weatherData ? weatherData.location.name : "";

  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState(place);

  const handleClick = () => {
    clicked ? <input type="text" /> : console.log('not clicked');
    setClicked(!clicked);
  }

  return (
    <div 
    className={"location-info"}
    onClick={handleClick}
    >

        <p className="region">{weatherData ? weatherData.location.region : ""}</p>

        {!clicked ? 
        <p 
        className="place enter-city">
          {weatherData ? weatherData.location.name : ""}
        </p>
        :
        <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(input);
          setClicked(false);
        }}
        >
         <input 
        className="enter-city input-city" 
        type="text" 
        value={input ? input : place} 
        onChange={((e) => setInput(e.target.value))}
        autoFocus 
        onFocus={(e) => e.target.select()} />
        </form>
        }

        <p className="country">{weatherData ? weatherData.location.country : ""}</p>
    </div>
  )
}

export default Location