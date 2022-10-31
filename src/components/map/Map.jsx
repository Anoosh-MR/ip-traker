import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ result }) => {
  let lat = result ? result.location.lat : 51.505;
  let lng = result ? result.location.lng : -0.09;

  const iconPerson = new L.Icon({
    iconUrl: require("../../resource/location-pin.png"),

    iconSize: [50, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={5}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={iconPerson}>
        <Popup>
          <FontAwesomeIcon icon={faLocationDot} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
