

module.exports = {
  getLatnLong: async (req, res, next) => {
    let zipcode = 400008;
    let result = getLatLngByZipcode(zipcode);
    console.log("result ", result);
  },
}


function getLatLngByZipcode(zipcode) {
  console.log("came here");
  const coordinates = { Latitude: 22.973423, Longitude: 78.656894 };	// Fallback coordinates in case of failure
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': 'zipcode ' + zipcode }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      console.log("got lat long", results);
      coordinates.Latitude = results[0].geometry.location.lat();
      coordinates.Longitude = results[0].geometry.location.lng();
    } else {
      console.log("google.maps.Geocoder request failure.")
    }
  });
  return coordinates;
}