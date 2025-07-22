import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import styles from "./GoogleMapComponent.module.css";
import type { FC } from "react";
import { useState } from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const GoogleMapComponent: FC<MapProps> = ({ latitude, longitude }) => {
  const [mapReady, setMapReady] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
    libraries: [],
  });

  const center = { lat: latitude, lng: longitude };

  const handleMapLoad = () => {
    if (window.google && window.google.maps) {
      setMapReady(true);
    }
  };

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className={styles.mapWrapper}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={handleMapLoad}
        options={{
          disableDefaultUI: true,
          styles: [
            {
              featureType: "all",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {mapReady && <Marker position={center} />}
      </GoogleMap>
    </div>
  );
};
