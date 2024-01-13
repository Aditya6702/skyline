// require the Unirest or any other module to make an HTTP GET request
const unirest = require('unirest');

// Specify new parameters
const newNum = DY1834;
const newName = 'NOZ4FY';
const newDate = '20240113';

// Make an HTTP GET request with the updated parameters
unirest.get(`https://api.flightapi.io/airline/65a2b2bebdcc6d7844a59ff5?num=${newNum}&name=${newName}&date=${newDate}`)
  .then(response => {
    console.log(response.body);
  })
  .catch(error => {
    console.log(error);
  });
