import React, { useEffect, useState } from 'react'
import { Fallback } from './Fallback';

const UseFetch = (url) => {
  const [data, setData] = useState(Fallback);
  const [main, setMain] = useState(Fallback);
  const [weather, setWeather] = useState(Fallback);
  const [wind, setWind] = useState(Fallback);
  const [clouds, setClouds] = useState(Fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchData = async (url) => {
        
        try {
          const response = await fetch(url);
          const users = await response.json();
          setData(users);
          setMain(users.main);
          setWeather(users.weather[0]);
          setWind(users.wind);
          setClouds(users.clouds);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }

    }
    useEffect(() => {

    fetchData(url);

  }, [url]);

  return { data, main, weather, wind, clouds, loading, error };
};

export default UseFetch;