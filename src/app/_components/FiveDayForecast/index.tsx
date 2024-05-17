'use client';
import { useEffect, useState } from 'react';
import {
  geoLocateAPI,
  fiveDayForecast,
  calcHighTemp,
} from '@/app/_lib/utils/fetch';
import WeatherCard from '../WeatherCard';
import { useErrAndSubmitContext } from '@/app/providers';

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}
interface Coords {
  lat: any;
  long: any;
}

const FiveDayForeCast = ({ city }: { city: string }) => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const { error, setError, submitted, setSubmit } = useErrAndSubmitContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coords: Coords | undefined = await geoLocateAPI(city);
        if (!coords) {
          setError(true);
          throw new Error('Could Not Retrieve Coordinates.');
        }
        const weatherFetchData = await fiveDayForecast(coords.lat, coords.long);
        const weatherList = weatherFetchData.list;
        if (!weatherList) {
          setError(true);
        }
        const maxTemps = calcHighTemp(weatherList);
        const filteredWeatherData = weatherList.filter(
          (element: { dt: number; main: { temp: any } }) => {
            const date = new Date(element.dt * 1000)
              .toISOString()
              .split('T')[0];
            const maxTempData = maxTemps.find((temp) => temp?.date === date);

            // If maxTempData is undefined, return false to exclude this element from the filtered array
            if (!maxTempData) {
              return false;
            }

            return element.main.temp === maxTempData.maxTemp;
          }
        );
        const splicedWD = filteredWeatherData.slice(0, 5);
        setWeatherData(splicedWD);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };

    fetchData();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center ms-auto me-auto">
      <h3 className="text-black text-center m-3 font-bold text-2xl">{city}</h3>
      <div className="flex flex-wrap sm:items-start lg:items-center md:justify-center">
        {submitted
          ? weatherData.map(
              (data: WeatherData): React.ReactElement => (
                <WeatherCard
                  key={data.dt}
                  date={new Date(data.dt * 1000).toISOString()}
                  temp={data.main.temp}
                  wind={data.wind.speed}
                  humidity={data.main.humidity}
                  icon={data.weather[0].icon}
                  description={data.weather[0].description}
                />
              )
            )
          : null}
      </div>
    </div>
  );
};

export default FiveDayForeCast;
