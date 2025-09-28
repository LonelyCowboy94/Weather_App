import { useState, useEffect } from "react";
import Styles from "./SearchCity.module.scss";

const SearchCity = ({ API_KEY, setCity }) => {
  const [inputValue, setInputValue] = useState("Novi Sad");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isSelecting, setIsSelecting] = useState(true);

  const fetchCities = async (text) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${text}`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (error) {
      setSuggestions([]);
      console.log("Greška:", error);
    }
  };

  useEffect(() => {
    if (isSelecting) return;
    if (inputValue.length > 1) {
      const delay = setTimeout(() => fetchCities(inputValue), 300);
      return () => clearTimeout(delay);
    } else {
      setSuggestions([]);
    }
  }, [inputValue, isSelecting]);

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0) {
        setInputValue(suggestions[highlightedIndex].name);
        setSuggestions([]);
      }
    }
  };

  const handleSelect = (cityName) => {
    setInputValue(cityName);
    setSuggestions([]);
    setCity(cityName);
    setIsSelecting(true);
  };

  return (
    <div className={Styles.locationInfo}>
      <form
        name="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setCity(inputValue);
          setSuggestions([]);
          setIsSelecting(true);
        }}
      >
        <label htmlFor="search-input" className={Styles["sr-only"]}>
          Search city
        </label>

        <input
          id="search-input"
          type="text"
          value={inputValue}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            setInputValue(e.target.value);
            setHighlightedIndex(-1);
            setIsSelecting(false);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search places..."
          className={Styles.searchCity}
        />
      </form>

      {suggestions.length > 0 && (
        <ul className={Styles.suggestions}>
          {suggestions.map((city, index) => (
            <li
              key={`${city.name}-${city.region}-${city.country}`}
              className={index === highlightedIndex ? Styles.highlighted : ""}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(-1)}
              onMouseDown={() => {
                handleSelect(city.name);
              }}
            >
              {city.name}, {city.region ? city.region + ", " : ""}
              {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchCity;
