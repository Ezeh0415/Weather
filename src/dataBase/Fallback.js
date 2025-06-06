 export const Fallback = {
  "location": {
    "name": "San Francisco",
    "region": "California",
    "country": "United States",
    "lat": 37.7749,
    "lon": -122.4194,
    "timezone": "America/Los_Angeles",
    "localtime": "2025-06-05 10:30"
  },
  "current": {
    "temperature_c": 18.5,
    "temperature_f": 65.3,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_kph": 13.0,
    "wind_mph": 8.1,
    "wind_dir": "W",
    "humidity": 72,
    "pressure_mb": 1015,
    "uv": 6.0,
    "feelslike_c": 18.0,
    "feelslike_f": 64.4,
    "visibility_km": 10,
    "air_quality": {
      "co": 231.4,
      "no2": 12.6,
      "o3": 28.2,
      "pm2_5": 5.1,
      "pm10": 8.0,
      "so2": 2.1,
      "us-epa-index": 1,
      "gb-defra-index": 1
    }
  },
  "forecast": {
    "forecastday": [
      {
        "date": "2025-06-05",
        "day": {
          "maxtemp_c": 22.0,
          "mintemp_c": 14.0,
          "avgtemp_c": 18.0,
          "maxwind_kph": 20.0,
          "totalprecip_mm": 0.2,
          "avgvis_km": 10.0,
          "avghumidity": 65,
          "daily_will_it_rain": 1,
          "daily_chance_of_rain": 80,
          "condition": {
            "text": "Light rain shower",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
            "code": 1240
          },
          "uv": 5.0
        },
        "astro": {
          "sunrise": "05:48 AM",
          "sunset": "08:24 PM",
          "moonrise": "03:21 AM",
          "moonset": "04:59 PM",
          "moon_phase": "Waning Crescent"
        },
        "hour": [
          {
            "time": "2025-06-05 00:00",
            "temp_c": 16.2,
            "condition": {
              "text": "Clear",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_kph": 9.0,
            "humidity": 78,
            "chance_of_rain": 0
          },
          {
            "time": "2025-06-05 01:00",
            "temp_c": 15.8,
            "condition": {
              "text": "Clear",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_kph": 8.5,
            "humidity": 80,
            "chance_of_rain": 0
          }
          // ... Add more hourly data as needed
        ]
      }
      // ... Add more forecast days if needed
    ]
  }
}
