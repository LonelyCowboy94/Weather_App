import Header from "./components/Header";
import WeatherDisplay from "./WeatherDisplay";

function App() {

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <>
      <WeatherDisplay 
      day={day}
      month={month}
      />
    </>
  )
}

export default App
