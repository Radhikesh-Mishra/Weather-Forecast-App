const baseUrl = "URL";

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation = async(lat, lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};
