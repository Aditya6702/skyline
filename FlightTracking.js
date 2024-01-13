import React, { useState } from "react";
import axios from "axios";
import "./FlightTracking.css"; // Import a CSS file for styling

const api_key = "9dc82e7a-00ab-4dc0-bc61-6f077199620d";
const api_base = "https://airlabs.co/api/v9/";

const FlightTracking = () => {
  const [depIata, setDepIata] = useState("");
  const [arrIata, setArrIata] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const queryString = `flights?_view=array&_fields=hex,flag,lat,lng,dir,alt&dep_iata=${depIata}&arr_iata=${arrIata}&api_key=${api_key}`;
      const response = await axios.get(`${api_base}${queryString}`);

      console.log("Flight details:", response.data);

      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flight-tracking-container">
      <h1>Flight Tracking</h1>
      <div className="search-section">
        <label>
          Departure IATA code:
          <input
            type="text"
            value={depIata}
            onChange={(e) => setDepIata(e.target.value)}
          />
        </label>
        <label>
          Arrival IATA code:
          <input
            type="text"
            value={arrIata}
            onChange={(e) => setArrIata(e.target.value)}
          />
        </label>
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search Flights"}
        </button>
      </div>

      <table className="flight-table">
        <thead>
          <tr>
            <th>Hex</th>
            <th>Flag</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Direction</th>
            <th>Altitude</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
            <td>{flight[0]}</td>
            <td>{flight[1]}</td>
            <td>{flight[2]}</td>
            <td>{flight[3]}</td>
            <td>{flight[4]}</td>
            <td>{flight[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTracking;
