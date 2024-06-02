import { setCountryWeather } from "./reducer";
import { AppDispatch } from "./store";
import getAPIService from "./service/service";
import { Weather } from "./types";

export const fetchCountryWeather = (city: string) => (dispatch: AppDispatch) => {
  getAPIService()
    .getGoogle(`?address=${city}`)
    .then((response) => {
      console.log(response);
      // getAPIService()
      //   .get<Weather>(
      //     `/forecast?latitude=51.1&longitude=17.0333&current=temperature_2m,relative_humidity_2m,rain,weather_code,wind_speed_10m&hourly=temperature_2m,rain&timezone=auto`
      //   )
      //   .then((response) => {
      //     console.log(response);
      //     dispatch(setCountryWeather(response.data));
      //   })
      //   .catch(() => {})
      //   .finally(() => {});
    })
    .catch(() => {})
    .finally(() => {});
};
