import { useState, useEffect } from 'react';
import './CalendarAndClock.scss';

const CalendarAndClock = () => {

     const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        
        setDate(new Date());
        
    }, [date]);

    let ordinalSuffix;
    
    switch(date.getDate()) { 
        case 1: 
        case 21: 
        case 31: 
        ordinalSuffix = "st";
        break;
        case 2: 
        case 22: 
        ordinalSuffix = "nd";
        break;
        case 3: 
        case 23: 
        ordinalSuffix = "rd";
        break;
        default:
        ordinalSuffix = "th";
    }

    const formatedDate = `${month[date.getMonth()]}/${date.getDate()+ordinalSuffix}/${day[date.getDay()]}`;
    const formatedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <p>
        {formatedDate} {formatedTime}
    </p>
  )
}

export default CalendarAndClock