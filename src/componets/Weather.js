import { CiTempHigh } from "react-icons/ci";
import {
  FaCloud,
  FaEye,
  FaMoon,
  FaTemperatureLow,
  FaWater,
} from "react-icons/fa6";
import { FaSearch, FaTint, FaWind } from "react-icons/fa";
import { useRef, useState } from "react";
import UseFetch from "../dataBase/UseFetch";

const Weather = () => {
  const inputRef = useRef();
  const [search, setSearch] = useState("london");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=54ce6cafa89cfcf417bc7968b63bb316&units=imperial`;
  const { data, main, weather, wind, clouds, loading, error } = UseFetch(url);

  const { description, main: weatherMain, } = weather;

  const getWindDirection = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(degrees / 45) % 8];
  };

  const handleSearch = () => {
    if (inputRef.current?.value.trim()) {
      setSearch(inputRef.current.value.trim());
      inputRef.current.value = ""; // clear input
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-2">
      <div className="w-full">
        <header className="text-center mb-8 flex items-center justify-between">
          <h1 className="text-sm md:text-3xl font-bold">Weather Dashboard</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search city..."
              onKeyDown={handleKeyDown}
              className="px-2 py-1 rounded-xl text-black focus:outline-none mt-1"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
            >
              <FaSearch className="text-white" />
            </button>
          </form>
        </header>

        {loading && (
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-300">Loading...</p>
          </div>
        )}

        {error && (
          <div
            className="bg-red-500 text-white px-4 py-3 rounded relative mt-4 text-center"
            role="alert"
          >
            <strong className="font-bold">Error fetching data. </strong>
            Please check the city name and try again.
          </div>
        )}

        {!loading && !error && main && (
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Current Weather */}
            <section className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-2xl font-semibold mb-1">
                    Current Weather
                  </h2>
                  <p className="text-lg opacity-80">{data.name}</p>
                </div>
                <p className="text-xl opacity-80 capitalize">{description}</p>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div>
                      {/* <img src={icon} alt={Date.name} /> */}
                </div>
                <div className="text-7xl font-bold mr-4 flex items-center gap-3">
                  {Math.round(main.temp)}°F
                </div>
                <div className="text-lg">
                  <p>Feels like: {Math.round(main.feels_like)}°F</p>
                  <p>{weatherMain}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <WeatherDetail
                  icon={<CiTempHigh className="mr-2" />}
                  label="Temp High"
                  value={`${Math.round(main.temp_max)}°F`}
                />
                <WeatherDetail
                  icon={<FaTemperatureLow className="mr-2" />}
                  label="Temp Low"
                  value={`${Math.round(main.temp_min)}°F`}
                />
              </div>
            </section>

            {/* Weather Details */}
            <section className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h2 className=" text-lg md:text-2xl font-semibold mb-6">Weather Details</h2>

              <div className="grid grid-cols-2 gap-4">
                <WeatherDetail
                  icon={<FaWind className="mr-2 text-xs" />}
                  label="Wind"
                  value={
                    wind
                      ? `${wind.speed} mph ${getWindDirection(wind.deg)}`
                      : "N/A"
                  }
                />
                <WeatherDetail
                  icon={<FaTint className="mr-2" />}
                  label="Humidity"
                  value={`${main.humidity}%`}
                />
                <WeatherDetail
                  icon={<FaCloud className="mr-2" />}
                  label="Clouds"
                  value={`${clouds?.all || 0}%`}
                />
                <WeatherDetail
                  icon={<FaEye className="mr-2" />}
                  label="Visibility"
                  value={`${data.visibility / 1609.34 || 0} mi`}
                />
                <WeatherDetail
                  icon={<FaWater className="mr-2" />}
                  label="Sea Level"
                  value={`${main.sea_level || "N/A"}`}
                />
                <WeatherDetail
                  icon={<FaMoon className="mr-2" />}
                  label="Pressure"
                  value={`${main.pressure}`}
                />
              </div>
            </section>
          </main>
        )}
      </div>
    </div>
  );
};

//  Reusable Detail Component
const WeatherDetail = ({ icon, label, value }) => (
  <div className="bg-white/5 p-4 rounded-lg">
    <div className="flex items-center mb-2 text-white text-sm">
      {icon}
      <span>{label}</span>
    </div>
    <div className=" text-sm md:text-xl font-bold">{value}</div>
  </div>
);

export default Weather;
