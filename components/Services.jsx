import React, { useEffect, useRef } from "react";
import Script from "next/script"; // Import Script component to load external scripts

const MapContainer = () => {
  const mapRef = useRef(null); // Ref to store the map DOM element

  useEffect(() => {
    if (typeof google !== "undefined" && mapRef.current) {
      const { google } = window; // Access the google object once the script is loaded

      // Initialize the map
      const map = new google.maps.Map(mapRef.current, {
        center: {
          lat: 37.090240, // Latitude
          lng: -95.712891, // Longitude
        },
        zoom: 10, // Zoom level
      });

      // You can add markers here, for example:
      const marker = new google.maps.Marker({
        position: { lat: 37.090240, lng: -95.712891 },
        map,
        title: "Marker Title", // Marker title
      });
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <>
      {/* Loading the Google Maps API script */}
      <Script
        strategy="beforeInteractive" // Load the script before the page is interactive
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAmrd9B0X9o2c-SMqREBFjnuSVzAzriu-M`} // Your Google Maps API key
      />
      <div
        ref={mapRef} // Attach ref to the map container div
        style={{ width: "100%", height: "400px" }} // Map container styles
      ></div>
    </>
  );
};

export default MapContainer;
