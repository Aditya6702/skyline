// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Flights {
    struct Flight {
        string id;
        string image;
        string name;
        string model;
    }

    struct Maintenance {
        string flightId;
        string fuelCapacity;
        string engineStatus;
        string safety;
        string atcR;
        string emission;
        string time;
    }

    struct Logs {
        string flightId;
        string details;
        string duration;
        string blackBox;
        string fuelConsum;
    }

    Flight[] public flightArray;
    Maintenance[] public maintenanceArray;
    Logs[] public logsArray;

    // Add this function to get the flight index
    function getFlightIndex(string memory _sid) internal view returns (uint8) {
        for (uint8 i = 0; i < flightArray.length; i++) {
            if (keccak256(abi.encodePacked(flightArray[i].id)) == keccak256(abi.encodePacked(_sid))) {
                return i;
            }
        }
        revert("Flight not found");
    }

    function addFlights(string memory _image, string memory _name, string memory _model, string memory _id) external {
        Flight memory newFlight;
        newFlight.image = _image;
        newFlight.name = _name;
        newFlight.model = _model;
        newFlight.id = _id;
        flightArray.push(newFlight);
    }

    function addLogs(
        string memory _flightId,
        string memory _details,
        string memory _duration,
        string memory _blackBox,
        string memory _fuelConsum
    ) external {
        Logs memory newLog;
        newLog.flightId = _flightId;
        newLog.details = _details;
        newLog.duration = _duration;
        newLog.blackBox = _blackBox;
        newLog.fuelConsum = _fuelConsum;
        logsArray.push(newLog);
    }

    function addMaintenance(
        string memory _flightId,
        string memory _fuelCapacity,
        string memory _engineStatus,
        string memory _safety,
        string memory _atcR,
        string memory _emission,
        string memory _time
    ) external {
        Maintenance memory newMaintenance;
        newMaintenance.flightId = _flightId;
        newMaintenance.fuelCapacity = _fuelCapacity;
        newMaintenance.engineStatus = _engineStatus;
        newMaintenance.safety = _safety;
        newMaintenance.atcR = _atcR;
        newMaintenance.emission = _emission;
        newMaintenance.time = _time;
        maintenanceArray.push(newMaintenance);
    }

    // Get all Flight details
    function getAllFlights() external view returns (Flight[] memory) {
        return flightArray;
    }

    // Get all Maintenance records
    function getAllMaintenanceDetails() external view returns (Maintenance[] memory) {
        return maintenanceArray;
    }

    // Get all Logs
    function getAllLogs() external view returns (Logs[] memory) {
        return logsArray;
    }
}
