import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Weather } from "./types";

export interface WeatherState {
  countryWeather: Weather | null;
}

const initialState: WeatherState = {
  countryWeather: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCountryWeather: (state, action: PayloadAction<Weather>) => {
      state.countryWeather = action.payload;
    },
  },
});

export const { setCountryWeather } = weatherSlice.actions;

export const getCountryWeather = (state: RootState) =>
  state.reducer.weatherReducer.countryWeather;

export default weatherSlice.reducer;
