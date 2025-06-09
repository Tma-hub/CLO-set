import React, { useEffect, useState } from 'react';
import { Title } from '../Title/Title';

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const latitude = 50.0755;
  const longitude = 14.4378;
  const apiKey = '91697ee1839a40ddb30131229250906';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&lang=cs`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Nelze načíst počasí z WeatherAPI');
        }

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Načítání počasí…</p>;
  if (error) return <p>Chyba: {error}</p>;

  return (
    <div className="weather">
      <Title sectionTitle={'Obleč se do každého počasí'} />

      <div className="weather-info">
        <p>
          <strong>
            {weather.location.name}, {weather.location.country}
          </strong>
        </p>
        <p>Teplota: {weather.current.temp_c} °C</p>
        <p>Podmínky: {weather.current.condition.text}</p>
        <p>
          Vítr: {weather.current.wind_kph} km/h, směr {weather.current.wind_dir}
        </p>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
      </div>
    </div>
  );
};
