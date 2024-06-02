export interface Weather {
  city_name: string;
  data: [
    {
      temp: number;
      max_temp: number;
      min_temp: number;
      weather: {
        description: string;
      };
      uv: number;
      wind_spd: number;
    }
  ];
}
