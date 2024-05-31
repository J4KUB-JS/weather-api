import React from "react";
import { useParams } from "react-router-dom";

export const CityWeather = () => {
  const params = useParams();

  return <div>{params.cityName}</div>;
};
