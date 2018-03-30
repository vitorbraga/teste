import axios from 'axios';

const URL = 'http://192.168.15.10:4000/api/search';

const buildURL = (p) => {
  return `${URL}?adults=${p.adults}&class=${p.class}&fromPlace=${p.fromPlace}&` +
    `fromDate=${p.fromDate}&toPlace=${p.toPlace}&toDate=${p.toDate}`;
}

const searchFlights = (flightInfo) => new Promise(
  (resolve, reject) => {
    axios.get(buildURL(flightInfo))
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });

module.exports = searchFlights;
