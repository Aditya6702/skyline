import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./Particle";
import { blue } from "@mui/material/colors";

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
    <div className="container mt-4 text-white">
      <h1 className="text-center" style={{
        marginTop:'10rem',
        fontSize:'3rem',
        color:'rgb(9, 171, 171)',
        fontWeight:'700'
      }}>Flight Tracking</h1>
      <div className="row">
        <div className="col-md-4">
          <label className="form-label" style={{
            
          }}>
            
            <input
              type="text"
              className="form-control"
              value={depIata}
            placeholder="Departure IATA code"
              onChange={(e) => setDepIata(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-4">
          <label className="form-label">
            
            <input
              type="text"
              className="form-control"
              placeholder="Arrival IATA"
              value={arrIata}
              onChange={(e) => setArrIata(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button
            className="btn btn-primary w-100"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search Flights"}
          </button>
        </div>
      </div>

      <table className="table mt-4 text-white">
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
      <Particle></Particle>
    </div>
  );
};

export default FlightTracking;
