const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const NodeGeocoder = require('node-geocoder');
// import { Loader, LoaderOptions } from 'google-maps';

const publicRouter = require('./routers/publicRouter');

// const whitelist = ['http://localhost:4200', 'localhost:8080', 'undefined'];
// const corsOptions = {
//   credentials: true, // This is important.
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin))
//       return callback(null, true)

//     callback(new Error('Not allowed by CORS'));
//   }
// }

//app.use(cors(true));
app.use(cors());  //corsOptions

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.Port || 8080;

// const options = {
//   provider: 'google',

//   // Optional depending on the providers
//   // fetch: customFetchImplementation,
//   apiKey: 'AIzaSyCfrf0VhiZxjMB_moxot6BI1q0JoVfPpRI', // for Mapquest, OpenCage, Google Premier
//   formatter: null // 'gpx', 'string', ...
// };

// const geocoder = NodeGeocoder(options);

// const res = await geocoder.geocode({
//   country: 'India',
//   zipcode: '400008'
// });

// app.get("/getLatnLong", async (req, res, next) => {
//   console.log("came here");
//   const result = await geocoder.geocode({
//     country: 'India',
//     zipcode: '400008'
//   });
//   console.log("result ", result);
// })

const request = require('request');
const { element } = require('protractor');
app.get("/getLatnLong", async (req, res, next) => {
  let zipcode = 400008;
  let dataArray = [
    {
      zipcode: "400008",
      color: "red",
      lat: "",
      long: "",
    },
    {
      zipcode: "411014",
      color: "blue",
      lat: "",
      long: "",
    }
  ];
  dataArray.forEach((element) => {
    // request(`https://thezipcodes.com/api/v1/search?zipCode=${element.zipcode}&countryCode=IN&apiKey=88f370d792f4caa39043b8bb1a43b1b0`, { json: true }, (err, res, body) => {
    //   if (err) { return console.log(err); }
    //   console.log(body);
    //   element.lat = body.location[0].latitude;
    //   element.long = body.location[0].longitude;

    // });
    let result = getLatnLongByZipCode(element.zipcode);
    console.log("result got was ", result);
  });
});

function getLatnLongByZipCode(zipcode) {
  request(`https://thezipcodes.com/api/v1/search?zipCode=${zipcode}&countryCode=IN&apiKey=88f370d792f4caa39043b8bb1a43b1b0`, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    return body;
  });
}

// app.get("/getLatnLong", (req, res, next) => {
//   let zipcode = 400008;
//   let result = getLatLngByZipcode(zipcode);
//   console.log("result ", result);
// });

// function getLatLngByZipcode(zipcode) {
//   console.log("came here");
//   const coordinates = { Latitude: 22.973423, Longitude: 78.656894 };	// Fallback coordinates in case of failure
//   const geocoder = new google.maps.Geocoder();
//   geocoder.geocode({ 'address': 'zipcode ' + zipcode }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       console.log("got lat long", results);
//       coordinates.Latitude = results[0].geometry.location.lat();
//       coordinates.Longitude = results[0].geometry.location.lng();
//     } else {
//       console.log("google.maps.Geocoder request failure.")
//     }
//   });
//   return coordinates;
// }

app.listen(port, () => {
  console.log('listening on port ' + port);
});