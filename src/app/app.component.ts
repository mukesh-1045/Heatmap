import { Component, OnInit } from "@angular/core";
// import { Loader } from "google-maps";
import { Loader } from "@googlemaps/js-api-loader";
// import { Loader, LoaderOptions } from "google-maps";
// import {} from "googlemaps";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // private map: google.maps.Map = null;
  // private heatmap: google.maps.visualization.HeatmapLayer = null;
  title = "HeatMap";
  lat: number = 20.5937;
  lng: number = 78.9629;
  locationChosen = false;
  // heatMapData = [
  //   { location: new google.maps.LatLng(37.782, -122.447), weight: 0.5 },
  //   new google.maps.LatLng(37.782, -122.445),
  //   { location: new google.maps.LatLng(37.782, -122.443), weight: 2 },
  //   { location: new google.maps.LatLng(37.782, -122.441), weight: 3 },
  //   { location: new google.maps.LatLng(37.782, -122.439), weight: 2 },
  //   new google.maps.LatLng(37.782, -122.437),
  //   { location: new google.maps.LatLng(37.782, -122.435), weight: 0.5 },

  //   { location: new google.maps.LatLng(37.785, -122.447), weight: 3 },
  //   { location: new google.maps.LatLng(37.785, -122.445), weight: 2 },
  //   new google.maps.LatLng(37.785, -122.443),
  //   { location: new google.maps.LatLng(37.785, -122.441), weight: 0.5 },
  //   new google.maps.LatLng(37.785, -122.439),
  //   { location: new google.maps.LatLng(37.785, -122.437), weight: 2 },
  //   { location: new google.maps.LatLng(37.785, -122.435), weight: 3 },
  // ];
  // heatMapData = [
  //   { lat: -34.397, lng: 150.644 },
  //   { lat: 19.076, lng: 72.8777 },
  // ];
  // onMapLoad(mapInstance: google.maps.Map) {
  //   this.map = mapInstance;
  //   // const pos = new google.maps.LatLng(39.233119, -84.592016);
  //   // here our in other method after you get the coords; but make sure map is loaded

  //   const coords: google.maps.LatLng[] = ; // can also be a google.maps.MVCArray with LatLng[] inside
  //   this.heatmap = new google.maps.visualization.HeatmapLayer({
  //     map: this.map,
  //     data: coords,
  //   });
  // }

  onChoseLocation(event) {
    console.log("event ", event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }
  // constructor(public loaderSev: Loader) {}

  ngOnInit() {
    let loader = new Loader({
      apiKey: "API_KEY" + "&libraries=visualization",
      // libraries: "visualization",
    });

    loader.load().then(() => {
      var heatMapData = [
        { location: new google.maps.LatLng(28.679079, 77.06971), weight: 0.5 },
        new google.maps.LatLng(28.679079, 77.06971),
        { location: new google.maps.LatLng(28.679079, 77.069712), weight: 2 },
        { location: new google.maps.LatLng(28.679079, 77.069714), weight: 3 },
        { location: new google.maps.LatLng(28.679079, 77.069716), weight: 2 },
        new google.maps.LatLng(28.679079, 77.06972),
        { location: new google.maps.LatLng(28.679079, 77.069722), weight: 0.5 },

        { location: new google.maps.LatLng(19.07609, 72.877426), weight: 3 },
        { location: new google.maps.LatLng(19.07609, 72.877428), weight: 2 },
        new google.maps.LatLng(19.07609, 72.87743),
        { location: new google.maps.LatLng(26.85, 80.949997), weight: 0.5 },
        new google.maps.LatLng(26.85, 80.949999),
        { location: new google.maps.LatLng(26.85, 80.949994), weight: 2 },
        { location: new google.maps.LatLng(26.85, 80.949992), weight: 3 },
      ];

      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 6,
      });

      var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
      });
      heatmap.setMap(map);
    });
  }

  // ngOnInit() {
  //   // this.loaderSev.load().then(function (google) {
  //   //   const map = new google.maps.Map(document.getElementById("map"), {
  //   //     center: { lat: -34.397, lng: 150.644 },
  //   //     zoom: 8,
  //   //   });
  //   // });
  //   let zipcode = 400008;
  //   let result = this.getLatLngByZipcode(zipcode);
  //   console.log("result ", result);
  // }

  // getLatLngByZipcode(zipcode) {
  //   console.log("came here");
  //   const coordinates = { Latitude: 22.973423, Longitude: 78.656894 }; // Fallback coordinates in case of failure
  //   this.loaderSev.load().then(function (google) {
  //     const geocoder = new google.maps.Geocoder();
  //     geocoder.geocode(
  //       { address: "zipcode " + zipcode },
  //       function (results, status) {
  //         if (status == google.maps.GeocoderStatus.OK) {
  //           console.log("got lat long", results);
  //           coordinates.Latitude = results[0].geometry.location.lat();
  //           coordinates.Longitude = results[0].geometry.location.lng();
  //         } else {
  //           console.log("google.maps.Geocoder request failure.");
  //         }
  //       }
  //     );
  //   });
  //   return coordinates;
  // }
}
