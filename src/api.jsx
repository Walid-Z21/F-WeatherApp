export const getWeatherData= async(cityName)=>{
    const response = await fetch (
        `${import.meta.env.VERCEL_API_URL}/api/weather?city=${cityName}`
    )
    return response.json();

}