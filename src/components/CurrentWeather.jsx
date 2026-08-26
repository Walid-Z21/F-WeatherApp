import { format, parse } from 'date-fns';
import './CurrentWeather.css'


const getWindDescription=(value)=>{
    if(value < 10 ) return 'Calm'
    if(value < 20 ) return 'A little breezy'
    if(value < 30 ) return 'Windy'
    return 'Very Windy'
}

const getHumidityDescription=(value)=>{
    if(value < 30 ) return 'Dry'
    if(value < 60 ) return 'Comfortable'
    if(value < 80 ) return 'Humid'
    return 'Sticky'
}

const getUvDescription=(value)=>{
    if(value < 3 ) return 'Low'
    if(value < 6 ) return 'Moderate'
    if(value < 8 ) return 'High'
    if(value < 11 ) return 'Very High'
    return 'Extreme'
}

const getDayAndHHMM=(rawdate)=>{
    const date = parse(rawdate, 'yyyy-MM-dd HH:mm', new Date())
    return format(date,'EEEE, HH:mm')
}

const CurrentWeather = ({data, location}) => {
    const{localtime, name}= location;
    const{temp_c, condition, feelslike_c, maxtemp_c, mintemp_c, wind_kph, humidity, uv} = data;
  return (
    <div className="current-weather">
        <div className="card left-card">
            <div>
                <h2>{ name == 'tel aviv'? 'NO' : name}</h2>
                <h1 className="temp">{temp_c}</h1>
                <p>📈{maxtemp_c}° /📉{mintemp_c}°</p>
                <p>Feels like {feelslike_c}°</p>
                <p>{getDayAndHHMM(localtime)}</p>
            </div>
            <div className="condition">
                <img src={condition.icon} alt={condition.text} />
                <h2 className="condition-text">{condition.text}</h2>
            </div>
        </div>
        <div className="card right-card">
            <div className="detail-item">
                <span className="detail-label">💨 Wind</span>
                <span className="detail-value"> {wind_kph} km/h
                    <br />
                    <small><i>{getWindDescription(wind_kph)}</i></small>
                </span>
            </div>
            <div className="detail-item">
                <span className="detail-label">💧 Humidity</span>
                <span className="detail-value"> {humidity}%<br />
                    <small><i>{getHumidityDescription(humidity)}</i></small>
                </span>
            </div>
            <div className="detail-item">
                <span className="detail-label">☀️ UV Index</span>
                <span className="detail-value"> {uv}<br />
                    <small><i>{getUvDescription(uv)}</i></small>
                </span>
            </div>
        </div>

    </div>
  )
}

export default CurrentWeather
