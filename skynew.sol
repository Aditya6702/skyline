// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Flights {
    struct Flight {
        string id;
        string image;
        string name;
        string model;
        Logs[] logs;
        mapping (string => string) maintenance;
    }

    struct Maintenance {
        string id;
        string fuelCapacity;
        string engineStatus;
        string safety;
        string atcR;
        string emission;
        string time;
    }

    struct Logs {
        string id;
        string details;
        string duration;
        string blackBox;
        string fuelConsum;
    }

    Flight[] public flightArray;
    Maintenance[] public maintArray;

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
        Flight storage newFlight = flightArray.push();
        newFlight.image = _image;
        newFlight.name = _name;
        newFlight.model = _model;
        newFlight.id = _id;
    }

    function getFlightAbs(string memory _sid) external view returns (string memory, string memory, string memory, string memory) {
        uint8 _flightIndex = getFlightIndex(_sid);
        return (flightArray[_flightIndex].image, flightArray[_flightIndex].name, flightArray[_flightIndex].model, flightArray[_flightIndex].id);
    }

    function getFlightDetail(string memory _sid) external view returns (string memory, string memory, string memory, string memory, string memory, string memory, string memory) {
        uint8 _index = getFlightIndex(_sid);
        return (
            flightArray[_index].name,
            flightArray[_index].model,
            flightArray[_index].maintenance["issue"],
            flightArray[_index].maintenance["solution"],
            flightArray[_index].maintenance["cost"],
            flightArray[_index].logs[flightArray[_index].logs.length - 1].details,
            flightArray[_index].logs[flightArray[_index].logs.length - 1].duration
        );
    }

    function updateFlightLogs(string memory _logDetails, string memory _flightDuration, string memory _blackBox, string memory _fuelConsum, string memory _sid) public {
        uint8 _flightIndex = getFlightIndex(_sid);
        Flight storage currentFlight = flightArray[_flightIndex];
        Logs memory newLog;
        newLog.details = _logDetails;
        newLog.duration = _flightDuration;
        newLog.blackBox = _blackBox;
        newLog.fuelConsum = _fuelConsum;
        currentFlight.logs.push(newLog); // Add the new log to the logs array
    }

    function updateFlightMaintenance(string memory _issue, string memory _solution, string memory _verdict, string memory _cost, string memory _fuelCapacity, string memory _engineStatus, string memory _safety, string memory _atcR, string memory _emission, string memory _time, string memory _sid) public {
        uint8 _flightIndex = getFlightIndex(_sid);
        Flight storage presentFlight = flightArray[_flightIndex];
        presentFlight.maintenance["issue"] = _issue;
        presentFlight.maintenance["solution"] = _solution;
        presentFlight.maintenance["verdict"] = _verdict;
        presentFlight.maintenance["cost"] = _cost;

        // Additional maintenance parameters
        presentFlight.maintenance["fuelCapacity"] = _fuelCapacity;
        presentFlight.maintenance["engineStatus"] = _engineStatus;
        presentFlight.maintenance["safety"] = _safety;
        presentFlight.maintenance["atcR"] = _atcR;
        presentFlight.maintenance["emission"] = _emission;
        presentFlight.maintenance["time"] = _time;
    }

    // Get flight details without logs
    function getFlightDetailsWithoutLogs(string memory _sid) external view returns (
        string memory, string memory, string memory, string memory,
        string memory, string memory, string memory
    ) {
        uint8 _index = getFlightIndex(_sid);
        Flight storage currentFlight = flightArray[_index];

        return (
            currentFlight.image, currentFlight.name, currentFlight.model, currentFlight.id,
            currentFlight.maintenance["issue"], currentFlight.maintenance["solution"], currentFlight.maintenance["cost"]
        );
    }

    // Get all logs for a flight
    function getFlightLogs(string memory _sid) external view returns (Logs[] memory) {
        uint8 _index = getFlightIndex(_sid);
        return flightArray[_index].logs;
    }
}
