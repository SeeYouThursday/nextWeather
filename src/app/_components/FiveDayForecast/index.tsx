import {
  geoLocateAPI,
  fiveDayForecast,
  calcHighTemp,
} from '@/app/_lib/utils/fetch';
import WeatherCard from '../WeatherCard';
import { useGlobalContext } from '@/app/providers';

interface Coords {
  lat: any;
  long: any;
}

const FiveDayForeCast = async ({ city }: { city: string }) => {
  try {
    const coords: Coords | undefined = await geoLocateAPI(city);
    if (!coords) {
      throw new Error('Could Not Retrieve Coordinates.');
    }
    const weatherData = await fiveDayForecast(coords.lat, coords.long);
    const weatherList = weatherData.list;
    if (!weatherList) {
      throw new Error('Could Not Retrieve Coordinates.');
    }
    const maxTemps = calcHighTemp(weatherList);
    const filteredWeatherData = weatherList.filter(
      (element: { dt: number; main: { temp: any } }) => {
        const date = new Date(element.dt * 1000).toISOString().split('T')[0];
        const maxTempData = maxTemps.find((temp) => temp.date === date);

        // If maxTempData is undefined, return false to exclude this element from the filtered array
        if (!maxTempData) {
          return false;
        }

        return element.main.temp === maxTempData.maxTemp;
      }
    );

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

    return filteredWeatherData
      .slice(0, 5)
      .map(
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
      );
  } catch (err) {
    console.log(err);
  }
};

export default FiveDayForeCast;