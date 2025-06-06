import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./componets/Weather";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Weather />} />
      </Routes>
      </BrowserRouter>
      {/* 1871a95b9f874b78a7a183040250406 */}
      {/* https://api.weatherapi.com/v1/current.xml?key=1871a95b9f874b78a7a183040250406&q=anambra&aqi=no */}
    </div>
  );

}
export default App;
