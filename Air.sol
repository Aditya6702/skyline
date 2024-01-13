// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Flights{
    struct Flight{
        string image;
        string name;
        string model;
        mapping (string => string) logs;
        mapping (string => string) maintenance;
    }

    Flight [] public flightArray;
    function addFlights(string memory _image, string memory _name, string memory _model) external {
        Flight storage newFlight = flightArray.push();
        newFlight.image = _image;
        newFlight.name = _name; 
        newFlight.model = _model;
    }

    function updateFlightLogs(string memory _logDetails,string memory _flightDuration,string memory _signature,uint _flightIndex) public {
        Flight storage currentFlight = flightArray[_flightIndex];
        currentFlight.logs["details"] = _logDetails;
        currentFlight.logs["duration"] = _flightDuration;
        currentFlight.logs["stamp"] = _signature;
    }

    function updateFlightMaintenance(string memory _issue, string memory _solution, string memory _verdict,string memory _cost,uint _flightIndex) public{
        Flight storage presentFlight = flightArray[_flightIndex];
        presentFlight.maintenance["issue"] = _issue;
        presentFlight.maintenance["solution"] = _solution;
        presentFlight.maintenance["verdict"] = _verdict;
        presentFlight.maintenance["cost"] = _cost;
    }

    function getFlightLogs(uint8 _flightIndex) public view returns (string memory,string memory){
        return (flightArray[_flightIndex].logs["duration"],
        flightArray[_flightIndex].logs["details"]);
    }

    function getFlightMaintenance(uint8 _flightIndex) public view returns (string memory,string memory){
        return (flightArray[_flightIndex].maintenance["issue"],
        flightArray[_flightIndex].maintenance["solution"]);
    }
}