import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { showDataOnMap } from "../utils/showDataOnMap";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom] = useState(0);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          setMapCountries(data);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className="map">
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, "cases")}
      </LeafletMap>
    </div>
  );
};

export default Map;
