import { format, parse } from 'date-fns'
import './HourlyForecast.css' 

const HourlyForecast =({data}) => {
  return (
    <div className='hourly-container card'>
    {data.map((hour, index)=>{
        return(
            <div className="hour-card" key={index}>
                <div className="hour-time">
                    {format(parse(hour.time, 'yyyy-MM-dd HH:mm', new Date()),'HH:00')}
                </div>
                <img src={hour.condition.icon} alt="icon" className='hour-icon' />
                <div className="hour-temp">{hour.temp_c}°</div>
                <div className="hour-rain">💧 {hour.chance_of_rain}%</div>
            </div>
            
            )
    })}
    </div>
  )
}

export default HourlyForecast
