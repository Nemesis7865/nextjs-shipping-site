import dynamic from "next/dynamic";
import React from "react";

// Dynamically load the GoogleMap component to ensure client-side rendering
const LoadScript = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.LoadScript),
  { ssr: false }
);
const GoogleMap = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.GoogleMap),
  { ssr: false }
);

const MapContainer = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.090240, // Replace with your latitude
    lng: -95.712891, // Replace with your longitude
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Use environment variable

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers or other map features here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
