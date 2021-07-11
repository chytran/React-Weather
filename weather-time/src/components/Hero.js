import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import heroBackground from '../image/OceanBackground.jpg';
import oceanSunset from '../image/OceanSunset.jpg';

const HeroContainer = styled.section`
    height: 100vh;
    max-height: 1100px;
    overflow: hidden;
    position: relative;
`;

const HeroWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const HeroSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;   

    &:before {
        content: '';
        position: absolute;
        bottom: 0vh;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 2;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%
        );
    } 
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
`;
const MainContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const HeroContent = styled.div`
    position: relative;
    margin-left: 1rem;
`;
const HeroSetUp = styled.div`
    width: 90%;
    height: 90%;
    background: transparent;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WeatherContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

const SearchBox = styled.div`
    z-index: 1000;
    margin-bottom: 3rem;
    opacity: 0.8;
    transition: 0.4s;
    width: 100%;

    &:hover {
        opacity: 0.6;
        border: none;
    }
`;
const SearchBar = styled.input`
    padding: 0.3rem;
    color: #121212;
    border: none;
    cursor: pointer;
    width: 100%;
    position: relative;
    z-index: 1000;
`;
const LocationBox = styled.div`
    color: #FFF;
    font-size: 32px;
`;
const Location = styled.div``;
const DateSet = styled.div``;
const WeatherBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Temperature = styled.div`
    font-size: 3rem;
`;
const TemperatureDifference = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-betweem;
    align-items: center;
    flex-direction: row;
    margin-left: 1.5rem;
    margin-top: 1.2rem;
`;

const TemperatureMax = styled.div`
    font-size: 2rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-style: italic;
`;

const TemperatureMin = styled.div`
    font-size: 2rem;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-style: italic;
`;

const MaxHeading = styled.div`
    font-size: 1.4rem;
`;
const MaxTemp = styled.div``;
const MinHeading = styled.div`
    font-size: 1.4rem;
`;
const MinTemp = styled.div``;
const Weather = styled.div``;

const api = {
    key: "089797f38b2df6598a51f2f2253173e8",
    base: `https://api.openweathermap.org/data/2.5/weather`
}

const Hero = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = e => {
        if (e.key === "Enter"){
            fetch(`${api.base}?q=${query}&units=imperial&APPID=${api.key}`)
            .then(res => res.json())
            .then(results => {
                setWeather(results);
                setQuery('');
                console.log(results);
            })
        }
    }

    // let searchBar = document.querySelector(".search-bar");

    // searchBar.addEventListener('load', () => {
    //     let lat;
    //     let long;

    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(position => {
    //             long = position.coords.longitude;
    //             lat = position.coords.latitude;
    //         })

    //         fetch(`${api.base}?lat=${lat}&long=${long}&units=imperial&APPID=${api.key}`)
    //             .then(res => res.json())
    //             .then(results => {
    //                 setWeather(results);
    //                 console.log(results);
    //             })
    //     }
    // })

    useEffect(() => {
    },[])

    const dateBuilder = (d) => {
        let months = ["January", 'February', 'March', 'April', 'May', 'June', "July", 'August', 'September',
                        'October', 'November', 'December'];
        let days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let date = d.getDate();
        let year = d.getFullYear();

        return `${day} ${month} ${date} ${year}`;
    }

    
    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroSlide>
                    <HeroImage src={oceanSunset} />
                    
                    <HeroSetUp>
                        <WeatherContainer>
                            <SearchBox>
                                <SearchBar 
                                type="text" 
                                className="search-bar"
                                placeholder="Search.."
                                onChange={e => setQuery(e.target.value)}
                                value={query}
                                onKeyPress={search}
                                />  
                            </SearchBox>
                            {(typeof weather.main != 'undefined') ? (
                                <div>
                                    <MainContent>
                                        <HeroContent>
                                            <LocationBox>
                                                <Location>{weather.name}, {weather.sys.country}</Location>
                                            </LocationBox>
                                            <DateSet>{dateBuilder(new Date())}</DateSet>
                                        </HeroContent>

                                        <WeatherBox>
                                            <Temperature>{weather.main.temp}°F</Temperature>
                                            <TemperatureDifference>
                                                <TemperatureMax>
                                                    <MaxHeading>Max</MaxHeading>    
                                                    <MaxTemp>{weather.main.temp_max}°F</MaxTemp>
                                                </TemperatureMax>
                                                <TemperatureMin>
                                                    <MinHeading>Min</MinHeading>
                                                    <MinTemp>{weather.main.temp_min}°F</MinTemp>
                                                </TemperatureMin>
                                            </TemperatureDifference>
                                            <Weather>{weather.weather[0].main}</Weather>
                                        </WeatherBox>
                                    </MainContent>
                                </div>
                            ) : ('')}
                        </WeatherContainer>
                    </HeroSetUp>
                </HeroSlide>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
