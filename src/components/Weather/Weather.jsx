import React, { useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import './Weather.css';

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

      <div className="weather__info">
        {' '}
        <div className="weather__img">
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
        </div>
        <div className="weather__mess">
          <p>
            <strong>
              {' '}
              <img className="pin" src="/img/pin.png" alt="pin" />
              {weather.location.name}, {weather.location.country}
            </strong>
            , {weather.current.condition.text}, {weather.current.temp_c} °C
          </p>
        </div>
      </div>

      <h4 className="weather__tip">
        {weather.current.temp_c <= 18
          ? 'Je chladněji, vezmi si dnes vrstvu navíc.'
          : 'Dnes je teplo, bundu můžeš nechat doma.'}
      </h4>
    </div>
  );
};
