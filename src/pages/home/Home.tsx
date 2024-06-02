import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getCountryWeather } from "../../reducer";
import { fetchCountryWeather } from "../../actions";
import SearchIcon from "@mui/icons-material/Search";

export const Home = () => {
  const dispatch = useAppDispatch();
  const [countryName, setCountryName] = useState("");

  return (
    <div className="my-10">
      <div className="flex justify-center items-center flex-col">
        <div className="text-primary text-4xl font-bold">
          Check out detailed weather here and there
        </div>
        <div className="flex-none gap-2 mt-10">
          <label className="input input-bordered flex items-center gap-2 w-[500px]">
            <input
              value={countryName}
              type="text"
              className="grow"
              placeholder="Type country name"
              onChange={(e) => {
                setCountryName(e.target.value);
              }}
            />
            <div
              className="btn btn-sm"
              onClick={() => {
                dispatch(fetchCountryWeather(countryName));
              }}
            >
              <SearchIcon fontSize="small" />
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <div className="stats shadow">
          <div className="p-5">
            <div className="text-2xl">Warsaw</div>
            <div className="text-lg mb-5">Sunny</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div className="text-lg">Temperature: 24</div>
              <div className="text-lg">Humidity: 24</div>
              <div className="text-lg">Wind speed: 24</div>
              <div className="text-lg">UV index: 24</div>
            </div>
          </div>

          <div className="p-5">
            <div className="text-2xl ">Warsaw</div>
            <div className="text-lg mb-5">Sunny</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div className="text-lg">Temperature: 24</div>
              <div className="text-lg">Humidity: 24</div>
              <div className="text-lg">Wind speed: 24</div>
              <div className="text-lg">UV index: 24</div>
            </div>
          </div>

          <div className="p-5">
            <div className="text-2xl ">Warsaw</div>
            <div className="text-lg mb-5">Sunny</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div className="text-lg">Temperature: 24</div>
              <div className="text-lg">Humidity: 24</div>
              <div className="text-lg">Wind speed: 24</div>
              <div className="text-lg">UV index: 24</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
