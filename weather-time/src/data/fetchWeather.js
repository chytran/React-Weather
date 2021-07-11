import axios from 'axios';

const URL = 'https://openweathermap.org/data/2.5/weather';
const API_Key = "089797f38b2df6598a51f2f2253173e8";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });

    return data;
}