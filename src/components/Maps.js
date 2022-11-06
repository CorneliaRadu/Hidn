import React, { useState } from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const markers = [
  { lat: 44.8268, lng: 26.325 },
  { lat: 44.7268, lng: 26.1025 },
  { lat: 44.9268, lng: 26.1022 },
  { lat: 44.4268, lng: 26.1025 },
  { lat: 44.4267, lng: 26.1045 },
  { lat: 44.3268, lng: 26.1925 },
  { lat: 44.4268, lng: 26.1525 },
  { lat: 44.7868, lng: 26.1025 },
  { lat: 44.4168, lng: 26.1065 },
  { lat: 44.4368, lng: 26.2125 },
  { lat: 44.4298, lng: 26.1025 },
  { lat: 44.4268, lng: 26.1055 },
  { lat: 44.4248, lng: 26.1025 },

  { lat: 36.1025, lng: 19.1025 },
  { lat: 44.4268, lng: 26.1025 },
  { lat: 26.1025, lng: 26.1025 },
  { lat: 42.1025, lng: 27.1025 },
  { lat: 40.1025, lng: 20.1025 },
  { lat: 45.1025, lng: 34.1025 },
  { lat: 45.1025, lng: 4.1025 },
  { lat: 35.1025, lng: 4.1025 },
  { lat: 45.225, lng: 88.1025 },
  { lat: 12.1025, lng: 26.1025 },
  { lat: 18.1025, lng: 39.1025 },
  { lat: 16.1025, lng: 26.1025 },
  { lat: 26.1025, lng: 2.1025 },
  { lat: 24.1025, lng: 86.1025 },
  { lat: 26.1025, lng: 6.1025 },
  { lat: 56.1025, lng: 26.1025 },
  { lat: 6.1025, lng: 126.1025 },
  { lat: 17.1025, lng: 20.1025 },
  { lat: 96.1025, lng: 36.1025 },
  { lat: 106.1025, lng: 44.1025 },
  { lat: 43.1025, lng: 126.1025 },
  { lat: 23.1025, lng: 8.1025 },
  { lat: 29.1025, lng: 36.1025 },
  { lat: 56.1025, lng: 18.1025 },
  { lat: 6.1025, lng: 46.1025 },
];

const style = {
  //Dark
  Name: "Dark",
  Style: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
    {
      width: "100%",
      height: "100%",
      left: "0px",
      top: "0px",
    },
  ],
};

export const Maps = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBbcwfM0Ng19LIaA8H5J0h8UkHQWXxFnwU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100vh`, width: "100vw" }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 44.4268, lng: 26.1025 }}
        options={{
          styles: isDark ? style.Style : {},
        }}
        // style={{
        //   backgroundColor: "#000",
        // }}
      >
        {markers.map((marker) => {
          return (
            <Marker
              visible={true}
              position={marker}
              icon={{
                url: require("./Group.svg"),
                // path: "M69 33C69 50.6731 54.6731 65 37 65C19.3269 65 5 50.6731 5 33C5 15.3269 19.3269 1 37 1C54.6731 1 69 15.3269 69 33Z",
                // fillColor: "#D04343",
                // fillOpacity: 0.9,
                scale: 0.2,
                // strokeColor: "#D9D9D9",
                // strokeWeight: 2,
              }}
            />
          );
        })}
      </GoogleMap>
      <button
        style={{
          zIndex: 1,
          position: "relative",
          background: "purple",
          bottom: "30px",
          border: "none",
          color: "#fff",
          height: "40px",
          paddingBottom: "15px"
        }}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "Normal mode" : "Hide mode"}
      </button>
    </div>
  );
});

ReactDOM.render(<Maps isMarkerShown />, document.getElementById("root"));

export default Maps;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBbcwfM0Ng19LIaA8H5J0h8UkHQWXxFnwU",
// })(Maps);
