import { useEffect, useState } from 'react';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    fetch('http://localhost:5269/weatherforecast')
        .then((res) => res.json())
        .then((data) => setForecasts(data))
        .catch((err) => console.error('Chyba pri načítaní z API:', err));
  }, []);

  return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Travel Itinerary Analyzer</h1>
        <h2>Test spojenia s .NET 8 API:</h2>
        <ul>
          {forecasts.map((f, i) => (
              <li key={i}>
                {f.date}: {f.temperatureC}°C - {f.summary}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;