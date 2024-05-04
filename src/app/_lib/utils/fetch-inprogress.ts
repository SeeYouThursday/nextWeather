// const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API;

// type maxTempData = {
//   temp: number;
//   date: string;
// };

// const fetchingData = async (api: string) => {
//   const response = await fetch(api);
//   if (response.status !== 200) {
//     return `${response.status} -- It's gotten messy here`;
//   }
//   const data = await response.json();

//   return data;
// };

// export const geoLocateAPI = async (city: string) => {
//   const countryCode = 840; //future dev - include full list to choose from
//   const geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=${weatherApiKey}`;
//   try {
//     const data = await fetchingData(geoAPI);

//     if (data[0] !== '' && data.length > 0) {
//       // let currentData = data[0];
//       const long = data[0].lon;
//       const lat = data[0].lat;
//       const coords = { lat, long };
//       console.log(coords);
//       return coords;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const fiveDayForecast = async (lat: number, long: number) => {
//   //   api kept switching up lat and longs, so the variables have been switched
//   const fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=imperial`;

//   try {
//     const data = await fetchingData(fiveDayForecast);
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const calcHighTemp = (data: any) => {
//   // Split the data into separate days
//   const splitDays = data.reduce(
//     (
//       acc: Record<string, object[]>,
//       curr: { dt: number; main: { temp: number } }
//     ) => {
//       const date = new Date(curr.dt * 1000); // Convert Unix timestamp to JavaScript Date
//       const dateStr = date.toISOString().split('T')[0]; // Convert Date to YYYY-MM-DD format

//       if (!acc[dateStr]) {
//         acc[dateStr] = []; // Initialize a new array for this date if it doesn't exist yet
//       }

//       acc[dateStr].push({ time: date, temp: curr.main.temp }); // Add the time and temperature to the array for this date

//       return acc;
//     },
//     {}
//   );

// Calculate the max temperature for each day and the time it occurred
//   const maxTemps = Object.entries(splitDays).map(
//     ([date, temps]: { date: string; temps: number; time: string }[]) => {
//       if (!temps) {
//         return;
//       }

//       const maxTempData: maxTempData = (temps as maxTempData[]).reduce(
//         (max, curr) => (curr.temp > max.temp ? curr : max),
//         { temp: -Infinity }
//       );

//       return {
//         date,
//         time: maxTempData.time,
//         maxTemp: maxTempData.temp,
//       };
//     }
//   );

//   return maxTemps;
// };
